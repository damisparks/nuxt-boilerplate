// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss", "@nuxtjs/google-fonts"],
  app: {
    head: {
      title:
        "Nuxity | Opinionated Nuxt3 Minimal Starter template packed with tailwindcss, google fonts, tailwind aspect ratio & more",
      titleTemplate: "%s - Nuxity",
    },
  },

  // https://google-fonts.nuxtjs.org/
  googleFonts: {
    display: "swap",
    families: {
      Montserrat: {
        wght: [300, 400, 500, 700],
        ital: [400, 500, 700],
      },
    },
  },
});
