// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';
import node from '@astrojs/node';
import tailwindcss from '@tailwindcss/vite';
import mdx from '@astrojs/mdx';
import markdoc from '@astrojs/markdoc';
import sitemap from '@astrojs/sitemap';
import partytown from '@astrojs/partytown';

// https://astro.build/config
export default defineConfig({
  output: 'static',
  integrations: [
    react(),
    mdx(),
    markdoc(),
    sitemap(),
    partytown(),
  ],

  

  adapter: node({
    mode: 'standalone'
  }),

  vite: {
    plugins: [
      tailwindcss()],
  }
});