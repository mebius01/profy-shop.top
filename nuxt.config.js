module.exports = {
  /*
  ** Headers of the page
  */
target: 'static',
  head: {
    title: 'profy-shop.top',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Kaushan+Script&family=Rubik:ital,wght@0,400;0,500;0,700;0,900;1,900&display=swap'}
    ],
  },
  modules: [
    '@nuxtjs/axios',
  ],
  axios: {
    baseURL: "http://localhost:8000/api"
  },
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    vendor: ['vue-notifications'],
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  plugins: [{src: '~plugins/vue-notifications', ssr: false},]
//   plugins: [
//     '~/plugins/vue-notifications.js',
//   ],
}

