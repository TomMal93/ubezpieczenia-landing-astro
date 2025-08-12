import svelte from '@astrojs/svelte';
import Unocss from '@unocss/astro';
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://przyklad-ubezpieczenia.pl',
  output: 'static',
  integrations: [
    svelte(),
    Unocss({
      injectReset: true,
    }),
  ],
  vite: {
    resolve: {
      alias: {
        '@': new URL('./src', import.meta.url).pathname,
      },
    },
  },
});
