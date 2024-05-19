// https://nuxt.com/docs/api/configuration/nuxt-config
// nuxt.config.ts
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: [
    'normalize.css/normalize.css',
    'primevue/resources/themes/aura-light-green/theme.css'
  ],
  modules: [
    'nuxt-primevue',
    '@pinia/nuxt',
  ],
  //plugins: ['~/plugins/pinia.js'],
})





