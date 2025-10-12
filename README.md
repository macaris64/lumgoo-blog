# Astro Blog

Modern statik blog - Astro 4 ve TypeScript ile oluşturulmuş, tamamen statik çalışan bir blog sistemi.

## 🚀 Özellikler

- ✅ **Astro 4** ile statik site oluşturma
- ✅ **TypeScript** desteği
- ✅ **Markdown/MDX** içerik yönetimi
- ✅ **Content Collections** ile tip güvenliği
- ✅ **Shiki** ile kod vurgulama
- ✅ **RSS** ve **Sitemap** otomatik oluşturma
- ✅ **SEO** optimizasyonu
- ✅ **Responsive** tasarım
- ✅ **Client-side** arama
- ✅ **Etiket** sistemi
- ✅ **Sayfalama** desteği

## 🛠️ Teknoloji Stack

- **Astro 4** - Statik site oluşturucu
- **TypeScript** - Tip güvenliği
- **@astrojs/mdx** - MDX desteği
- **Shiki** - Kod vurgulama
- **Zod** - Şema validasyonu

## 📁 Proje Yapısı

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
│ │ ├── config.ts          # Content collection şeması
│ │ └── posts/
│ │     └── hello-world.md # Örnek yazı
│ ├── components/
│ │ ├── Layout.astro       # Ana layout
│ │ ├── PostCard.astro     # Yazı kartı
│ │ ├── Pagination.astro   # Sayfalama
│ │ ├── TagLink.astro      # Etiket linki
│ │ └── Prose.astro        # İçerik stilleri
│ ├── lib/
│ │ ├── posts.ts           # Yazı yardımcıları
│ │ ├── dates.ts           # Tarih formatları
│ │ └── readingTime.ts     # Okuma süresi
│ ├── pages/
│ │ ├── index.astro        # Ana sayfa
│ │ ├── posts/
│ │ │ └── [slug].astro     # Yazı detay
│ │ ├── tags/
│ │ │ └── [tag].astro      # Etiket sayfası
│ │ ├── search.astro       # Arama sayfası
│ │ ├── search.json.ts     # Arama API
│ │ ├── rss.xml.ts         # RSS feed
│ │ └── sitemap.xml.ts     # Sitemap
│ └── styles/
│     ├── global.css       # Global stiller
│     └── card.module.css  # Kart stilleri
└── scripts/
    └── new-post.mjs       # Yeni yazı oluşturma
```

## 🚀 Kurulum

1. **Bağımlılıkları yükleyin:**

   ```bash
   npm install
   ```

2. **Geliştirme sunucusunu başlatın:**

   ```bash
   npm run dev
   ```

3. **Tarayıcıda açın:**
   ```
   http://localhost:4321
   ```

## 📝 Yeni Yazı Ekleme

### Manuel Yöntem

`src/content/posts/` dizinine yeni bir `.md` veya `.mdx` dosyası ekleyin:

```markdown
---
title: "Yazı Başlığı"
slug: "yazi-basligi"
description: "Yazı açıklaması"
date: 2025-10-12
tags: ["etiket1", "etiket2"]
draft: false
---

# Yazı İçeriği

Yazınızın içeriği buraya gelir...
```

### Otomatik Yöntem

```bash
npm run new-post
```

## 🏗️ Build ve Deploy

```bash
# Build
npm run build

# Preview
npm run preview
```

Build çıktısı `dist/` dizininde oluşturulur.

## 📄 Sayfalar

- **Ana Sayfa** (`/`) - Tüm yazıların listesi (sayfalama ile)
- **Yazı Detay** (`/posts/[slug]`) - Tekil yazı görüntüleme
- **Etiket Sayfası** (`/tags/[tag]`) - Belirli etikete sahip yazılar
- **Arama** (`/search`) - Client-side arama
- **RSS Feed** (`/rss.xml`) - RSS beslemesi
- **Sitemap** (`/sitemap.xml`) - XML sitemap

## 🎨 Özelleştirme

### Stiller

- `src/styles/global.css` - Global CSS stilleri
- `src/styles/card.module.css` - Kart bileşeni stilleri

### Bileşenler

- `src/components/` - Tüm Astro bileşenleri
- `src/lib/` - Yardımcı fonksiyonlar

### İçerik Şeması

`src/content/config.ts` dosyasında yazı şemasını özelleştirebilirsiniz.

## 📊 SEO Özellikleri

- ✅ Meta etiketleri
- ✅ Open Graph etiketleri
- ✅ Twitter Card etiketleri
- ✅ Canonical URL'ler
- ✅ RSS feed
- ✅ XML sitemap
- ✅ Okuma süresi hesaplama

## 🔍 Arama

Blog, client-side arama özelliği içerir. Arama şu alanlarda çalışır:

- Yazı başlığı
- Yazı açıklaması
- Etiketler

## 📱 Responsive Tasarım

Blog, tüm cihazlarda düzgün görüntülenmek üzere responsive olarak tasarlanmıştır:

- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (767px ve altı)

## 🚀 Performans

- Statik site oluşturma ile hızlı yükleme
- Optimize edilmiş CSS
- Minimal JavaScript
- SEO dostu URL yapısı

## 📄 Lisans

Bu proje MIT lisansı altında lisanslanmıştır.

---

**Astro Blog** - Modern statik blog çözümü 🚀
