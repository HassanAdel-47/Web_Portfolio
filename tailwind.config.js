/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      float: ["rtl"], // Add RTL float variant
      margin: ["rtl"], // Add RTL margin variant
      padding: ["rtl"], // Add RTL padding variant
    },
  },
  plugins: [
    require("tailwindcss-rtl"), // Add tailwindcss-rtl plugin
  ],
};
