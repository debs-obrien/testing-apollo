module.exports = {
  locales: [
    {
      code: 'en',
      iso: 'en-US',
      name: 'English',
      file: 'en.js'
    },
    {
      code: 'es',
      iso: 'es-ES',
      name: 'Español',
      file: 'es.js'
    }
  ],
  defaultLocale: 'es',
  seo: false,
  lazy: true,
  langDir: 'i18n/',
  parsePages: false,
  vuex: {
    moduleName: 'i18n',
    mutations: {
      setLocale: false,
      setMessages: false
    },
    preserveState: false
  },

  vueI18n: {
    fallbackLocale: 'es'
  }
}
