import { defineConfig } from 'astro/config';
import path from 'path';
import { fileURLToPath } from 'url';

import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';
import markdoc from '@astrojs/markdoc';
import svelte from '@astrojs/svelte';
import remarkCodeTitles from 'remark-code-titles';

// 这三行必须写在最前面
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  outDir: 'dist',
  //base: '/my-website/',
  output: 'static',
  site: 'https://ariastrocyte.github.io/my-website',

  markdown: {
    syntaxHighlight: 'shiki',
    shikiConfig: {
      theme: 'css-variables',
    },
    remarkPlugins: [remarkCodeTitles],
  },

  integrations: [
    mdx(),
    markdoc(),
    svelte(),
    tailwind({ applyBaseStyles: false }),
    sitemap(),
  ],

  vite: {
    plugins: [],
    resolve: {
      alias: {
        $: path.resolve(__dirname, './src')
      }
    },
    optimizeDeps: {
      allowNodeBuiltins: true
    }
  }
});