export default defineNuxtConfig({
  future: {
    compatibilityVersion: 4,
  },
  compatibilityDate: '2025-06-01',
  devtools: { enabled: true },
  modules: ['@pinia/nuxt', '@nuxt/image', '@nuxt/fonts', '@nuxt/eslint', '@nuxtjs/device', '@nuxt/ui'],
  app: {
    head: {
      title:
        'Nuxity | Opinionated Nuxt3 Minimal Starter template packed with Tailwind CSS v4, NuxtFonts, Pinia & more',
      titleTemplate: '%s - Nuxity',
    },
  },

  css: ['~/assets/css/main.css'],

  eslint: { config: { standalone: false } },

  image: {
    provider: 'netlify',
    domains: ['images.unsplash.com'],
    quality: 75,
    formats: ['webp'],
  },

  fonts: {
    families: [{ name: 'Montserrat', provider: 'google' }],
  },

  icon: {
    clientBundle: { scan: true },
    provider: 'iconify',
  },
})
