// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  srcDir: 'src',
  dir: { public: '../public' },
  devtools: { enabled: true },
  typescript: { shim: false }
})
