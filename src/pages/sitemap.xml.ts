import type { APIRoute } from 'astro';
import { getAllPosts, getAllTags } from '../lib/posts';
import { formatDateISO } from '../lib/dates';

export const prerender = true;

export const GET: APIRoute = async ({ site }) => {
  const siteUrl = site || 'http://localhost:4321';
  const posts = await getAllPosts();
  const tags = await getAllTags();
  
  const postUrls = posts.map(post => `
    <url>
      <loc>${siteUrl}/posts/${post.slug}</loc>
      <lastmod>${formatDateISO(post.data.date)}</lastmod>
      <changefreq>monthly</changefreq>
      <priority>0.8</priority>
    </url>
  `).join('');
  
  const tagUrls = tags.map(tag => `
    <url>
      <loc>${siteUrl}/tags/${tag}</loc>
      <lastmod>${formatDateISO(new Date())}</lastmod>
      <changefreq>weekly</changefreq>
      <priority>0.6</priority>
    </url>
  `).join('');
  
  const sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${siteUrl}</loc>
    <lastmod>${formatDateISO(new Date())}</lastmod>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>${siteUrl}/search</loc>
    <lastmod>${formatDateISO(new Date())}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>
  ${postUrls}
  ${tagUrls}
</urlset>`;
  
  return new Response(sitemapContent, {
    status: 200,
    headers: {
      'Content-Type': 'application/xml',
    },
  });
};
