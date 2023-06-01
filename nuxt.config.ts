// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: 'Menu app',
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1.0',
    },
    // pageTransition: { name: 'slide', mode: 'out-in' },
  },
  css: ['@/assets/css/tailwind.css'],
  modules: ['@nuxtjs/tailwindcss', 'nuxt-icon'],
});
