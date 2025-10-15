#!/usr/bin/env node

import { writeFileSync, existsSync, mkdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Get command line arguments
const args = process.argv.slice(2);
const title = args[0];

if (!title) {
  console.error('❌ Please provide a title for the new post:');
  console.log('Usage: npm run new-post "Title of the Post"');
  process.exit(1);
}

// Create slug from title
const slug = title
  .toLowerCase()
  .replace(/[^a-z0-9\s-]/g, '')
  .replace(/\s+/g, '-')
  .replace(/-+/g, '-')
  .trim();

// Get current date
const now = new Date();
const date = now.toISOString().split('T')[0];

// Create post content
const postContent = `---
title: "${title}"
description: "Here is the description of your post."
date: ${date}
category: "Your category"
subcategory: "Your Subcategory"
tags: ["tag1", "tag2"]
slug: "${slug}"
draft: false
aiGenerated: false
---

# ${title}

Here is the content of your post.

## Subtitle

Content of the subheading.

## Conclusion

Content of the result.
`;

// Ensure posts directory exists
const postsDir = join(__dirname, '..', 'src', 'content', 'posts');
if (!existsSync(postsDir)) {
  mkdirSync(postsDir, { recursive: true });
}

// Create file path
const filePath = join(postsDir, `${slug}.md`);

// Check if file already exists
if (existsSync(filePath)) {
  console.error(`❌ "${slug}.md" file already exists. Please choose a different slug.`);
  process.exit(1);
}

// Write file
try {
  writeFileSync(filePath, postContent, 'utf8');
  console.log(`✅ New article created: ${filePath}`);
  console.log(`📝 Title: ${title}`);
  console.log(`🔗 Slug: ${slug}`);
  console.log(`📅 Date: ${date}`);
  console.log(`📁 File: src/content/posts/${slug}.md`);
  console.log('');
  console.log('💡 Hint: You can now start writing your post in the file.');
} catch (error) {
  console.error('❌ An error occurred', error.message);
  process.exit(1);
}
