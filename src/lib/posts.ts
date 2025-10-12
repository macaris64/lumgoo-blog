import { getCollection } from 'astro:content';
import type { CollectionEntry } from 'astro:content';

export type Post = CollectionEntry<'posts'>;

export async function getAllPosts(): Promise<Post[]> {
  const posts = await getCollection('posts');
  return posts
    .filter((post) => !post.data.draft)
    .sort((a, b) => b.data.date.getTime() - a.data.date.getTime());
}

export async function getBySlug(slug: string): Promise<Post | undefined> {
  const posts = await getAllPosts();
  return posts.find((post) => post.slug === slug);
}

export async function getByTag(tag: string): Promise<Post[]> {
  const posts = await getAllPosts();
  return posts.filter((post) => post.data.tags.includes(tag));
}

export async function getAllTags(): Promise<string[]> {
  const posts = await getAllPosts();
  const tags = new Set<string>();
  posts.forEach((post) => {
    post.data.tags.forEach((tag) => tags.add(tag));
  });
  return Array.from(tags).sort();
}

export interface PaginationResult {
  posts: Post[];
  currentPage: number;
  totalPages: number;
  hasNext: boolean;
  hasPrev: boolean;
}

export async function paginate(
  page: number = 1,
  perPage: number = 5
): Promise<PaginationResult> {
  const allPosts = await getAllPosts();
  const totalPages = Math.ceil(allPosts.length / perPage);
  const startIndex = (page - 1) * perPage;
  const endIndex = startIndex + perPage;
  const posts = allPosts.slice(startIndex, endIndex);

  return {
    posts,
    currentPage: page,
    totalPages,
    hasNext: page < totalPages,
    hasPrev: page > 1,
  };
}

export async function getPersonalPosts(): Promise<Post[]> {
  const posts = await getAllPosts();
  return posts.filter((post) => !post.data.aiGenerated);
}

export async function getAIGeneratedPosts(): Promise<Post[]> {
  const posts = await getAllPosts();
  return posts.filter((post) => post.data.aiGenerated);
}

export async function countPersonalPosts(): Promise<number> {
  const posts = await getPersonalPosts();
  return posts.length;
}

export async function countAIGeneratedPosts(): Promise<number> {
  const posts = await getAIGeneratedPosts();
  return posts.length;
}
