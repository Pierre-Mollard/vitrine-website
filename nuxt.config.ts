import { defineNuxtConfig } from "nuxt/config";
import { resolve } from "path";

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  alias: { "@": resolve(__dirname, "/") },
  css: ['~/assets/css/main.css'],
  modules: [
    '@nuxtjs/tailwindcss'
  ],
  app: {
    baseURL: "/", // ❌ This is needed for GitHub Pages but NOT for a custom domain, TODO: replace "/vitrine-website/" with "/"
  },
  vite: {
    base: '/',
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  }
})
