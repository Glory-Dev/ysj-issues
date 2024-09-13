import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import netlify from '@astrojs/netlify';


import mdx from '@astrojs/mdx';

export default defineConfig({
  output: 'server',
  adapter: netlify(),
  integrations: [
    mdx({
      // MathJax
      remarkPlugins: [remarkMath],
      rehypePlugins: [rehypeKatex],
      // MDX
      extendPlugins: 'defaults',
      extendMarkdownConfig: false,
      smartypants: true,
      gfm: true,
    }),
  ],
});

