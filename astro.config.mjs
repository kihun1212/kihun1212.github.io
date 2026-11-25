import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://YOUR_USERNAME.github.io',
  base: '/YOUR_REPOSITORY',
  output: 'static',
  trailingSlash: 'always',
  integrations: [mdx()],
  vite: {
    plugins: [tailwindcss()],
  },
});
