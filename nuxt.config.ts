// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  image: {
    dir: "assets/img",
  },
  imports: {
    dirs: [
      "constants",
    ],
  },
  modules: ["@nuxt/image"]
})