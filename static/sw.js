importScripts('/_nuxt/workbox.3de3418b.js')

const workboxSW = new self.WorkboxSW({
  "cacheId": "nathakit",
  "clientsClaim": true,
  "directoryIndex": "/"
})

workboxSW.precache([
  {
    "url": "/_nuxt/app.ee81fcbf8c854c50797b.js",
    "revision": "619364a351511d965a7433c5f565e1f6"
  },
  {
    "url": "/_nuxt/layouts/default.12af0d77b615e786e6e4.js",
    "revision": "ff9284a29db5368fae807db835f189a7"
  },
  {
    "url": "/_nuxt/layouts/empty.614633738c1214dd2031.js",
    "revision": "49f84dc3af4f0bb816f634a39ed0f498"
  },
  {
    "url": "/_nuxt/manifest.fa004e430bcecba4e828.js",
    "revision": "12c8ae500c71e03c4e75262866cdeab7"
  },
  {
    "url": "/_nuxt/pages/index.61e221ca334598fdfa30.js",
    "revision": "5c8940fa36d3b81cc2176c1d305809e4"
  },
  {
    "url": "/_nuxt/vendor.68bdf35e27432049f030.js",
    "revision": "792f87520725419f490ecbca235f2d0b"
  }
])


workboxSW.router.registerRoute(new RegExp('/_nuxt/.*'), workboxSW.strategies.cacheFirst({}), 'GET')

workboxSW.router.registerRoute(new RegExp('/.*'), workboxSW.strategies.networkFirst({}), 'GET')

