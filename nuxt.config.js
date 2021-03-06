module.exports = {

  buildDir: 'dist',
  target: 'server',

  head: {
    htmlAttrs: {
      lang: 'ru'
    },
    title: 'Profy Shop Top - Красота в Твоих руках!',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {name:'theme-color', content: '#373F48'},
      { hid: 'description', name: 'description', content: 'Profy Shop Top - beauty-room оригинальной косметики для профессионального и домашнего ухода за лицом и телом' },
      { property: "og:type", content: "business.business" },
      { property: "og:title", content: "Profy Shop Top - Красота в Твоих руках!" },
      { property: "og:url", content: "https://profy-shop.top" },
      { property: "og:image", content: "https://profy-shop.top/logo.jpg",  },
      { property: "business:contact_data:street_address", content: "Космонавтов 124Б, офис 2" },
      { property: "business:contact_data:locality", content: "Николаев" },
      { property: "business:contact_data:region", content: "Николаевская" },
      { property: "business:contact_data:postal_code", content: "54000" },
      { property: "business:contact_data:country_name", content: "UA" },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Kaushan+Script&family=Rubik:ital,wght@0,400;0,500;0,700;0,900;1,900&display=swap'}
    ],
  },

  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/gtm',
    '@nuxtjs/robots',
    '@nuxtjs/pwa',
  ],

  gtm: {
    id: 'GTM-K8HWWMZ'
  },

  robots: {
    UserAgent: '*',
    Disallow: ['/api', '/admin'],
  },

  pwa: {
    meta: {
      title: 'Profy Shop Top - Красота в Твоих руках!',
      author: 'Profy Shop Top',
    },
    icon: {
      source: './static/favicon.png',
      fileName: 'favicon.png',
    },
    manifest: {
      name: 'Profy Shop Top',
      short_name: 'ProfyShop',
      lang: 'ru',
      theme_color: '#373F48'
    },
  },

  loading: {
    color: '#B1DDEA',
    height: '10px',
    continuous: true,
  },

  axios: {
    baseURL: "https://profy-shop.top/api",
    // baseURL: "http://127.0.0.1:8000/api",

    headers: {
      common: {
        "Content-type": "application/json; charset=UTF-8",
      },
      post: {
        
      },
    }
  },

  build: {
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

  plugins: [
    { src: "@/plugins/aos", ssr: false },
    { src: "@/plugins/jsonld", ssr: true },
    // { src: '@/plugins/ga.js', ssr: false }
  ],
}

