import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import compressor from "astro-compressor";
import react from '@astrojs/react';
import icon from "astro-icon";
import sentry from "@sentry/astro";
import spotlightjs from "@spotlightjs/astro";

import tunnel from "astro-tunnel";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind('tailwind.config.js'), react(), icon(),sentry(), spotlightjs(), tunnel({acceptCloudflareNotice: true,port:4322,}), compressor({
    gzip: true,
    brotli: true,
    minify: true
  })]
});