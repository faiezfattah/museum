// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',

  modules: ['@nuxtjs/tailwindcss', 'shadcn-nuxt'],

  css: ['@/assets/css/tailwind.css'],

  shadcn: {
    prefix: '',
    /**
     * Directory that the component lives in.
     * @default "./components/ui"
     */
    componentDir: './components/ui'
  },

  tailwindcss: {
    editorSupport: true,
    cssPath: ['@/assets/css/tailwind.css', {injectPosition: 'first'}],
  },
  
  // routeRules: {
  //   '/': { static: true },
  //   '/about': { static: true },
  //   '/projects': { static: true },
  //   '/contact': { static: true },
  //   '/article': { static: true },
  //   '/collections': { static: true },
  //   '/booking': { static: true },
  // }
})