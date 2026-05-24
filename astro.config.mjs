import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import vercel from '@astrojs/vercel';

export default defineConfig({
  site: 'https://wilderton-advisory.com',
  output: 'static',
  adapter: vercel(),
  integrations: [tailwind()],
});
