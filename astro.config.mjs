import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';

export default defineConfig({
  site: 'https://dev-vithushan.github.io',
  base: '/portfolio',
  output: 'static',
  integrations: [tailwind(), react()],
  build: {
    assets: 'assets'
  }
});
