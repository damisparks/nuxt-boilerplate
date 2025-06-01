export default defineNuxtConfig({
  future: {
    compatibilityVersion: 4,
  },
  compatibilityDate: '2025-06-01',
  devtools: { enabled: true },
  modules: ['@pinia/nuxt', '@nuxt/image', '@nuxt/fonts', '@nuxt/eslint', '@nuxtjs/device'],
  app: {
    head: {
      title:
        'Nuxity | Opinionated Nuxt3 Minimal Starter template packed with tailwindcss, google fonts, tailwind aspect ratio & more',
      titleTemplate: '%s - Nuxity',
    },
  },

  css: ['~/assets/css/main.css'],

  eslint: { config: { standalone: false } },

  image: { quality: 75 },

  fonts: {
    families: [{ name: 'Montserrat', provider: 'google' }],
  },
})
