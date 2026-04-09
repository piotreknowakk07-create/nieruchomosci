import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://kupimynieruchomosclodz.pl',

  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [
    sitemap({
      customPages: [
        'https://kupimynieruchomosclodz.pl/',
        'https://kupimynieruchomosclodz.pl/privacy.html',
      ],
    }),
  ],
});