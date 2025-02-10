import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import remarkReadingTime from './src/utils/readTime.mjs';

// https://astro.build/config
export default defineConfig({
  site: 'https://donRyu.github.io', 
  vite: {
    build: {
      rollupOptions: {}
    }
  },

  markdown: {
    remarkPlugins: [remarkReadingTime],
    drafts: true,
    shikiConfig: {
      theme: 'material-theme-palenight',
      wrap: true
    }
  },

  integrations: [
    mdx({
      syntaxHighlight: 'shiki',
      shikiConfig: {
        theme: 'material-theme-palenight',
        wrap: true
      },
      drafts: true
    }),
    sitemap(),
    tailwind()
  ]
});
