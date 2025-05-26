import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import { defineConfig } from 'astro/config';
import svelte from '@astrojs/svelte';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';
import markdoc from '@astrojs/markdoc';
import remarkCodeTitles from 'remark-code-titles';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default defineConfig({
  outDir: 'dist'
  base: '/my-website/', // ⚠️ 改成你的 repo 名
  output: 'static',     // ⚠️ GitHub Pages 只能用 static
  site: 'https://ariastrocyte.github.io/my-website', // ⚠️ 改成你自己的 GitHub Pages 網址

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