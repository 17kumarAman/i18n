// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    
      '@nuxtjs/i18n' ,
      '@nuxtjs/tailwindcss',
     
    
  ],
 
  i18n: {
    strategy: "prefix",
    defaultLocale: "hi",
    locales: [
      {
        code: "en",
        name: "English",
        file: "en.ts",
      },
      {
        code: "hi",
        name: "Hindi",
        file: "hi.ts",
      },
    ],
    lazy: true,
    langDir: "locales",
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      alwaysRedirect: true,
    },
  },
})
