// https://tailwindcss.com/docs/installation
/** @type {import('tailwindcss').Config} */

// eslint-disable-next-line @typescript-eslint/no-var-requires
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {

  // doc : https://tailwindcss.com/docs/guides/nuxtjs
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}'
  ],
  theme: {
    // https://tailwindcss.com/docs/font-family
    fontFamily: {
      sans: ['Montserrat', ...defaultTheme.fontFamily.sans]
    },
    extend: {}
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/forms')
  ]
}
