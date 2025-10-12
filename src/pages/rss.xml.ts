import type { APIRoute } from 'astro';
import { getAllPosts } from '../lib/posts';

export const prerender = true;

export const GET: APIRoute = async ({ site }) => {
  const posts = await getAllPosts();
  const siteUrl = site || 'http://localhost:4321';
  
  const rssItems = posts.map(post => {
    const postUrl = `${siteUrl}/posts/${post.slug}`;
    const pubDate = post.data.date.toUTCString();
    
    return `
      <item>
        <title><![CDATA[${post.data.title}]]></title>
        <description><![CDATA[${post.data.description}]]></description>
        <link>${postUrl}</link>
        <guid isPermaLink="true">${postUrl}</guid>
        <pubDate>${pubDate}</pubDate>
        ${post.data.tags.map(tag => `<category><![CDATA[${tag}]]></category>`).join('')}
      </item>
    `;
  }).join('');
  
  const rssContent = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Astro Blog</title>
    <description>Modern statik blog - Astro 4 ve TypeScript ile oluşturulmuş</description>
    <link>${siteUrl}</link>
    <atom:link href="${siteUrl}/rss.xml" rel="self" type="application/rss+xml"/>
    <language>tr</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    ${rssItems}
  </channel>
</rss>`;
  
  return new Response(rssContent, {
    status: 200,
    headers: {
      'Content-Type': 'application/xml',
    },
  });
};
