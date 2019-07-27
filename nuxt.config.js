module.exports = {

  head: {
    titleTemplate: 'Nomadical',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Meta description' }
    ],
    link: [
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Karla' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons'},
    ]
  },

  modules: [
    '@nuxtjs/pwa',
    '@nuxtjs/axios',
	],

  manifest: {
    name: "Nathakit Sae-Tan",
    description: "Nathakit Sae-Tan",
    theme_color: "#38ea92",
  },

  css: [
    '~/assets/css/main.styl'
  ],

  build: {
    vendor: [
      'vuetify'
    ],
    extend (config, { isDev, isClient, isServer }) {
      const urlLoader = config.module.rules.find((rule) => rule.loader === 'url-loader')
      urlLoader.options.limit = 2000 // 2kb
    }
  },

  plugins: [
    { src: "~/plugins/vuetify.js", ssr: false },
    // { src: "~/plugins/ga.js", ssr: false }
  ]
}