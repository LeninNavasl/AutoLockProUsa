// @ts-check
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://autolockprousa.com',
  trailingSlash: 'always',
  compressHTML: true,
  build: {
    // Crucial for Strict CSP: ensures all stylesheets are external .css files
    inlineStylesheets: 'never'
  },
  vite: {
    build: {
      // Crucial for Strict CSP: ensures scripts are emitted as external .js files, never inlined
      assetsInlineLimit: 0
    }
  },
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/admin/')
    })
  ]
});
