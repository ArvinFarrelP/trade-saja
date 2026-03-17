import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';
// import sitemap from '@astrojs/sitemap'; ❌ disable

export default defineConfig({
  site: 'https://trade-saja.vercel.app/',
  integrations: [
    tailwind({ applyBaseStyles: false }),
    mdx(),
    // sitemap(), ❌ disable
  ],
  markdown: {
    shikiConfig: {
      theme: 'one-dark-pro',
      wrap: true,
    },
  },
});