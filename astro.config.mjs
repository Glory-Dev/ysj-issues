import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import netlify from '@astrojs/netlify';

export default defineConfig({
  output: 'server',
  adapter: netlify(),
  integrations: [
    mdx({
      // MDX
      extendPlugins: 'defaults',
      extendMarkdownConfig: false,
      smartypants: true,
      gfm: true,
      // MathJax for LaTeX
      remarkPlugins: [remarkMath],
      rehypePlugins: [rehypeKatex],
    }),
  ],
});

