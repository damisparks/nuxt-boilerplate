// https://tailwindcss.com/docs/installation
/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [],
  theme: {
    // https://tailwindcss.com/docs/font-family
    fontFamily: {
      sans: ["Montserrat", ...defaultTheme.fontFamily.sans],
    },
    extend: {},
  },
  plugins: [
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/forms"),
  ],
};
