import path from 'path'
import i18n from './i18n'

export default {
  mode: 'universal',
  // meta for pwa etc

  /*
   ** Headers of the page
   */
  head: {
    titleTemplate: '%s',
    htmlAttrs: {
      lang: 'es'
    }
  },
  /*
   ** Active link class for the router
   */
  router: {
    linkExactActiveClass: 'exact-active-link'
  },

  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },

  /*
   ** Global CSS
   */
  // css: ['@/assets/scss/main.scss'],

  /*
   ** Plugins to load before mounting the App
   */

  plugins: [],

  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://github.com/nuxt-community/axios-module#usage
    '@nuxtjs/axios',
    'nuxt-svg-loader',
    '@nuxtjs/pwa',
    'nuxt-purgecss',
    // plugin to add styles globally
    // https://github.com/nuxt-community/style-resources-module
    '@nuxtjs/style-resources',
    [
      '@nuxtjs/apollo',
      {
        clientConfigs: {
          default: '~/apollo/clientConfig.js'
        }
      }
    ],
    ['nuxt-i18n', i18n]
  ],

  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    postcss: {
      plugins: {
        tailwindcss: path.resolve(__dirname, './tailwind.config.js')
      }
    },
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)||(.svg$)/,
          options: {
            fix: true
          }
        })
      }
    }
  }
}
