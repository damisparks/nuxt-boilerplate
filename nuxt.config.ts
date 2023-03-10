// Doc: https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  nitro: {
    preset: 'node-server'
  },
  modules: [
    '@nuxtjs/tailwindcss', '@nuxtjs/google-fonts', '@pinia/nuxt', '@nuxt/image-edge',
    'nuxt-icon'],
  app: {
    head: {
      title:
        'Nuxity | Opinionated Nuxt3 Minimal Starter template packed with tailwindcss, google fonts, tailwind aspect ratio & more',
      titleTemplate: '%s - Nuxity'
    }
  },

  image: {
    // Unsplash uses the imgix provider
    // Doc: https://v1.image.nuxtjs.org/providers/unsplash
    imgix: {
      baseURL: 'https://images.unsplash.com/'
    },

    presets: {
      main: {
        modifiers: {
          format: 'webp',
          fit: 'cover',
          quality: '60'
        }
      }
    }
  },

  imports: {
    // store directory for pinia
    dirs: ['store']
  },

  // Doc: https://pinia.vuejs.org/ssr/nuxt.html#nuxt-js
  pinia: {
    autoImports: [
      // automatically imports `defineStore`
      // import { defineStore, acceptHMRUpdate } from 'pinia'
      'defineStore',
      'acceptHMRUpdate'
    ]
  },

  // Doc: https://google-fonts.nuxtjs.org/
  googleFonts: {
    display: 'swap',
    families: {
      Montserrat: {
        wght: [300, 400, 500, 700],
        ital: [400, 500, 700]
      }
    }
  }
})
