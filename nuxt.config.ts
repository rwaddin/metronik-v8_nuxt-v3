export default defineNuxtConfig({
  ssr: false,
  devtools: { enabled: true },
  css:[
    "~/assets/keenicons/duotone/style.css",
    "~/assets/keenicons/outline/style.css",
    "~/assets/keenicons/solid/style.css",
    // "~/assets/sass/element-ui.dark.scss",
    // "~/assets/sass/plugins",
    // "~/assets/sass/style",
    "@/assets/sass/element-ui.dark.scss",
    "@/assets/sass/plugins.scss",
    "@/assets/sass/style.scss"
  ],
  modules:[
    '@pinia/nuxt'
  ],
  runtimeConfig:{
    public:{
      BASE_URL: "http://localhost:3000/"
    }
  }
})
