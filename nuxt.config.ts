// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/google-fonts', '@pinia/nuxt'],
  app: {
    head: {
      title:
        'Nuxity | Opinionated Nuxt3 Minimal Starter template packed with tailwindcss, google fonts, tailwind aspect ratio & more',
      titleTemplate: '%s - Nuxity'
    }
  },

  imports: {
    // store directory for pinia
    dirs: ['store']
  },

  // https://pinia.vuejs.org/ssr/nuxt.html#nuxt-js
  pinia: {
    autoImports: [
      // automatically imports `defineStore`
      // import { defineStore, acceptHMRUpdate } from 'pinia'
      'defineStore',
      'acceptHMRUpdate'
    ]
  },

  // https://google-fonts.nuxtjs.org/
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
