import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import compressor from "astro-compressor";
import react from '@astrojs/react';
import icon from "astro-icon";
import sentry from "@sentry/astro";
import spotlightjs from "@spotlightjs/astro";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind('tailwind.config.js'), react(), icon(), compressor({
    gzip: true,
    brotli: true,
    minify: true
  }), sentry(), spotlightjs()]
});