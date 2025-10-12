# Astro Blog

Modern static blog - A fully static blog system built with Astro 4 and TypeScript.

https://lumgoo.com

## 🚀 Features

- ✅ Static site generation with **Astro 4**
- ✅ **TypeScript** support
- ✅ **Markdown/MDX** content management
- ✅ Type safety with **Content Collections**
- ✅ Code highlighting with **Shiki**
- ✅ Automatic **RSS** and **Sitemap** generation
- ✅ **SEO** optimization
- ✅ **Responsive** design
- ✅ **Client-side** search
- ✅ **Tag** system
- ✅ **Pagination** support

## 🛠️ Technology Stack

- **Astro 4** - Static site generator
- **TypeScript** - Type safety
- **@astrojs/mdx** - MDX support
- **Shiki** - Code highlighting
- **Zod** - Schema validation

## 📁 Project Structure

```
.
├── package.json
├── tsconfig.json
├── astro.config.mjs
├── .gitignore
├── README.md
├── public/
│ └── favicon.svg
├── src/
│ ├── content/
│ │ ├── config.ts          # Content collection schema
│ │ └── posts/
│ │     └── hello-world.md # Sample post
│ ├── components/
│ │ ├── Layout.astro       # Main layout
│ │ ├── PostCard.astro     # Post card
│ │ ├── Pagination.astro   # Pagination
│ │ ├── TagLink.astro      # Tag link
│ │ └── Prose.astro        # Content styles
│ ├── lib/
│ │ ├── posts.ts           # Post helpers
│ │ ├── dates.ts           # Date formats
│ │ └── readingTime.ts     # Reading time
│ ├── pages/
│ │ ├── index.astro        # Home page
│ │ ├── posts/
│ │ │ └── [slug].astro     # Post detail
│ │ ├── tags/
│ │ │ └── [tag].astro      # Tag page
│ │ ├── search.astro       # Search page
│ │ ├── search.json.ts     # Search API
│ │ ├── rss.xml.ts         # RSS feed
│ │ └── sitemap.xml.ts     # Sitemap
│ └── styles/
│     ├── global.css       # Global styles
│     └── card.module.css  # Card styles
└── scripts/
    └── new-post.mjs       # Create new post
```

## 🚀 Installation

1. **Install dependencies:**

   ```bash
   npm install
   ```

2. **Start the development server:**

   ```bash
   npm run dev
   ```

3. **Open in browser:**
   ```
   http://localhost:4321
   ```

## 📝 Adding New Posts

### Manual Method

Add a new `.md` or `.mdx` file to the `src/content/posts/` directory:

```markdown
---
title: "Post Title"
slug: "post-title"
description: "Post description"
date: 2025-10-12
tags: ["tag1", "tag2"]
draft: false
---

# Post Content

Your post content goes here...
```

### Automated Method

```bash
npm run new-post
```

## 🏗️ Build and Deploy

```bash
# Build
npm run build

# Preview
npm run preview
```

Build output is generated in the `dist/` directory.

## 📄 Pages

- **Home Page** (`/`) - List of all posts (with pagination)
- **Post Detail** (`/posts/[slug]`) - Individual post view
- **Tag Page** (`/tags/[tag]`) - Posts with specific tag
- **Search** (`/search`) - Client-side search
- **RSS Feed** (`/rss.xml`) - RSS feed
- **Sitemap** (`/sitemap.xml`) - XML sitemap

## 🎨 Customization

### Styles

- `src/styles/global.css` - Global CSS styles
- `src/styles/card.module.css` - Card component styles

### Components

- `src/components/` - All Astro components
- `src/lib/` - Helper functions

### Content Schema

You can customize the post schema in the `src/content/config.ts` file.

## 📊 SEO Features

- ✅ Meta tags
- ✅ Open Graph tags
- ✅ Twitter Card tags
- ✅ Canonical URLs
- ✅ RSS feed
- ✅ XML sitemap
- ✅ Reading time calculation

## 🔍 Search

The blog includes a client-side search feature. Search works across:

- Post title
- Post description
- Tags

## 📱 Responsive Design

The blog is designed to be responsive and display properly on all devices:

- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (767px and below)

## 🚀 Performance

- Fast loading with static site generation
- Optimized CSS
- Minimal JavaScript
- SEO-friendly URL structure

## Useful Links

https://lumgoo.com
https://markdownlivepreview.com/

## 📄 License

This project is licensed under the MIT License.

---

**Astro Blog** - Modern static blog solution 🚀
