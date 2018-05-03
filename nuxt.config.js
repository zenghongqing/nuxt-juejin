module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'nuxt-juejin',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  plugins: [
    '~/plugins/element-ui',
    '~/plugins/main-plugin'
  ],
  css: [
    '~/assets/css/main.scss',
    '~/assets/css/icon.scss'
  ],
  router: {
    middleware: 'auth'
  },
  modules: [
    '@nuxtjs/axios'
  ],
  axios: {
    proxy: true
  },
  proxy: {
    '/api': {
      target: 'https://banner-storage-ms.juejin.im',
      pathRewrite: {'^/api': ''}
    },
    '/japi': {
      target: 'https://gold-tag-ms.juejin.im',
      pathRewrite: { '^/japi': '' }
    },
    '/rapi': {
      target: 'https://recommender-api-ms.juejin.im',
      pathRewrite: { '^/rapi': '' }
    },
    '/tapi': {
      target: 'https://timeline-merger-ms.juejin.im',
      pathRewrite: { '^/tapi': '' }
    },
    '/xapi': {
      target: 'https://xiaoce-timeline-api-ms.juejin.im',
      pathRewrite: { '^/xapi': '' }
    }
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
        config.devtool = 'eval-source-map'
      }
    }
  },
  generate: {
    router: [
      '/welcome/frontend',
      'welcome/android',
      'welcome/backend',
      '/welcome/ai',
      '/welcome/ios',
      '/welcome/freebie',
      '/welcome/article'
    ],
    // html-minifier 对 html 文件进行压缩
    minify: {
      collapseWhitespace: false
    }
  }
}
