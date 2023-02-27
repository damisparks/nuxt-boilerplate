// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss"],
  app: {
    head: {
      title:
        "Nuxity | Opinionated Nuxt3 Minimal Starter template packed with tailwindcss, google fonts, tailwind aspect ratio & more",
      titleTemplate: "%s - Nuxity",
    },
  },
});
