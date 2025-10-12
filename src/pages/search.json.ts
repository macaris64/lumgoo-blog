import type { APIRoute } from 'astro';
import { getAllPosts } from '../lib/posts';

export const prerender = true;

export const GET: APIRoute = async () => {
  const posts = await getAllPosts();
  
  const searchData = posts.map(post => ({
    title: post.data.title,
    slug: post.slug,
    description: post.data.description,
    tags: post.data.tags,
    date: post.data.date.toISOString(),
  }));
  
  return new Response(JSON.stringify(searchData), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
    },
  });
};
