import { defineNuxtConfig } from "nuxt/config";
import { resolve } from "path";
import { createI18n } from 'vue-i18n'

const i18n = createI18n({
  // something vue-i18n options here ...
})

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  alias: { "@": resolve(__dirname, "/") },
  css: ['~/assets/css/main.css'],
  modules: ['@nuxtjs/tailwindcss', '@nuxt/content', "@nuxtjs/i18n"],
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