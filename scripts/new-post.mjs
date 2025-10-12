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
  console.error('❌ Lütfen bir başlık girin:');
  console.log('Kullanım: npm run new-post "Yazı Başlığı"');
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
slug: "${slug}"
description: "Yazı açıklaması buraya gelir"
date: ${date}
tags: ["etiket1", "etiket2"]
draft: false
---

# ${title}

Yazınızın içeriği buraya gelir...

## Alt Başlık

İçerik devam eder...

## Sonuç

Yazının sonucu buraya gelir.
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
  console.error(`❌ "${slug}.md" dosyası zaten mevcut!`);
  process.exit(1);
}

// Write file
try {
  writeFileSync(filePath, postContent, 'utf8');
  console.log(`✅ Yeni yazı oluşturuldu: ${filePath}`);
  console.log(`📝 Başlık: ${title}`);
  console.log(`🔗 Slug: ${slug}`);
  console.log(`📅 Tarih: ${date}`);
  console.log(`📁 Dosya: src/content/posts/${slug}.md`);
  console.log('');
  console.log('💡 İpucu: Yazıyı düzenlemek için dosyayı açın ve içeriği güncelleyin.');
} catch (error) {
  console.error('❌ Dosya oluşturulurken hata oluştu:', error.message);
  process.exit(1);
}
