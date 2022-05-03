import { defineConfig } from 'astro/config';
import preact from '@astrojs/preact';
import react from '@astrojs/react';

import vue from '@astrojs/vue';

// https://astro.build/config
export default defineConfig({
  site: 'https://theurbans.github.io/uniform',
  integrations: [
    // Enable Preact to support Preact JSX components.
    preact(), // Enable React for the Algolia search component.
    react(),
    vue()
  ],
  markdown: {
    syntaxHighlight: 'shiki',
    shikiConfig: {
      theme: 'material-palenight',
      wrap: true
    }
  }
});
