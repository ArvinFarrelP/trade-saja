# Trade Saja

**Crypto Education, Blockchain Research, and Web3 Insights**  
by Arvin Farrel Pramuditya

A professional cryptocurrency research blog built with Astro and Tailwind CSS.

---

## 🚀 Quick Start

### Prerequisites
- **Node.js** v18+ — [nodejs.org](https://nodejs.org)
- **npm** v9+ (comes with Node.js)

### 1 — Install dependencies
```bash
npm install
```

### 2 — Start dev server
```bash
npm run dev
```

Open [http://localhost:4321](http://localhost:4321) in your browser.

---

## 📁 Project Structure

```
trade-saja/
├── public/
│   ├── favicon.svg
│   └── robots.txt
├── src/
│   ├── components/
│   │   ├── Navbar.astro
│   │   ├── Footer.astro
│   │   └── ArticleCard.astro
│   ├── content/
│   │   ├── config.ts              ← Content collection schema
│   │   └── blog/
│   │       ├── monero-privacy.md  ← Featured article (1200+ words)
│   │       ├── rise-of-defi.md
│   │       ├── layer2-scaling.md
│   │       └── bitcoin-halving-2024.md
│   ├── layouts/
│   │   ├── BaseLayout.astro       ← SEO, OG tags, fonts
│   │   └── ArticleLayout.astro    ← Article with reading progress
│   ├── pages/
│   │   ├── index.astro            ← Home page
│   │   ├── about.astro            ← About page
│   │   ├── 404.astro
│   │   └── blog/
│   │       ├── index.astro        ← Blog list with filters
│   │       └── [slug].astro       ← Dynamic article pages
│   └── styles/
│       └── global.css             ← Tailwind + custom design tokens
├── astro.config.mjs
├── tailwind.config.mjs
└── package.json
```

---

## ✍️ Adding a New Article

Create a new `.md` file in `src/content/blog/`:

```markdown
---
title: "Your Article Title"
description: "A concise meta description (under 160 characters)."
pubDate: 2025-06-01
author: "Arvin Farrel Pramuditya"
tags: ["Tag1", "Tag2", "Tag3"]
category: "DeFi"          # Privacy | DeFi | Blockchain | Bitcoin | Web3
featured: false            # Set true to pin on homepage
draft: false               # Set true to hide from production
---

Your article content in Markdown...
```

The slug is automatically derived from the filename. A file named `my-article.md` becomes `/blog/my-article`.

---

## 🏗️ Build for Production

```bash
npm run build
```

Output goes to the `dist/` folder.

Preview the production build locally:
```bash
npm run preview
```

---

## ☁️ Deployment

### Vercel (Recommended)
```bash
npm i -g vercel
vercel
```
Or connect your GitHub repo at [vercel.com](https://vercel.com) — zero config needed.

### Netlify
Drag and drop the `dist/` folder, or use the Netlify CLI:
```bash
npm run build
netlify deploy --prod --dir=dist
```

### GitHub Pages
Add to `astro.config.mjs`:
```js
export default defineConfig({
  site: 'https://yourusername.github.io',
  base: '/trade-saja',  // your repo name
  // ...
});
```
Then use the official [withastro/action](https://github.com/withastro/action) GitHub Action.

---

## 🎨 Design System

| Token | Value |
|---|---|
| Background primary | `#09090b` |
| Background card | `#131419` |
| Text primary | `#eaedf4` |
| Text secondary | `#8b93aa` |
| Accent blue | `#3b82f6` |
| Font heading | Space Mono |
| Font body | Sora |

---

## 📦 Tech Stack

| Tool | Version | Purpose |
|---|---|---|
| [Astro](https://astro.build) | ^4.16 | Static site framework |
| [Tailwind CSS](https://tailwindcss.com) | ^3.4 | Utility-first styling |
| [@tailwindcss/typography](https://tailwindcss.com/docs/typography-plugin) | ^0.5 | Prose styling |
| [@astrojs/mdx](https://docs.astro.build/en/guides/integrations-guide/mdx/) | ^3.1 | MDX support |
| [@astrojs/sitemap](https://docs.astro.build/en/guides/integrations-guide/sitemap/) | ^3.2 | Auto sitemap |
| [reading-time](https://github.com/ngryman/reading-time) | ^1.5 | Article read time |

---

## 📝 License

© 2025 Trade Saja — Arvin Farrel Pramuditya. All rights reserved.
