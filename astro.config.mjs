// @ts-check
import { defineConfig } from 'astro/config';

import node from '@astrojs/node';

// https://astro.build/config
export default defineConfig({
  site: 'https://twin-ewan.github.io',

  adapter: node({
    mode: 'standalone',
  }),
});