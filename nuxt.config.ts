export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss', '@pinia/nuxt', 'nuxt-icon', '@nuxt/image', '@nuxt/fonts'],
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

  fonts: {
    families: [{name: 'Montserrat', provider: 'google'}]
  }
})
