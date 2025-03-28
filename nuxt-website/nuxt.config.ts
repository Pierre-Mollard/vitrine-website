import { resolve } from "path";

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  alias: { "@": resolve(__dirname, "/") },
  css: ['~/assets/css/main.css'],
  modules: [
    '@nuxtjs/tailwindcss'
  ],
  tailwindcss: {
    viewer: false
  },
  app: {
    baseURL: "/vitrine-website/", // ❌ This is needed for GitHub Pages but NOT for a custom domain, TODO: replace "/vitrine-website/" with "/"
  },
})
