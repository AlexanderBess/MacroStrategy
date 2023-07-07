export default {
  ssr: false,
  target: 'static',
  head: {
    title: 'MicroStrategy - buy bitcoin at a discount!',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'description',
      },
    ],
    script: [
      {
        src: 'https://platform.twitter.com/widgets.js'
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.svg' },
    ],
  },
  css: [
    '@/assets/scss/main.scss',
  ],
  components: true,
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    '@nuxtjs/dotenv',
    '@nuxtjs/color-mode',
    '@nuxtjs/moment',
  ],
  styleResources: {
    scss: ['./assets/scss/resources.scss'],
  },
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/style-resources',
    'bootstrap-vue/nuxt',
    'cookie-universal-nuxt',
  ],
  build: {
    productionSourceMap: false,
    productionGzip: true,
    productionGzipExtensions: ['js', 'css', 'svg'],
    extend(config, { isClient }) {
      if (isClient) { config.optimization.splitChunks.maxSize = 100000 }
      config.node = { fs: 'empty' };
    },
    transpile: [
      'vee-validate/dist/rules'
    ],
    babel: {
      compact: false,
    },
    postcss: null,
  },
  axios: {
    baseURL: process.env.API
  }
};
