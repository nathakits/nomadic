"use strict";

const { Nuxt, Builder } = require('nuxt')
const app = require('express')()
const port = process.env.PORT || 3000
const os = require('os');

let address = os.networkInterfaces()['eno1'][0].address

// We instantiate nuxt.js with the options
let config = require('./nuxt.config.js')
const nuxt = new Nuxt(config)
app.use(nuxt.render)

// Build only in dev mode with hot-reloading
if (config.dev) {
    new Builder(nuxt).build()
        .then(listen)
        .catch((error) => {
            console.error(error)
            process.exit(1)
        })
}
else {
    listen()
}

// Listen the server
function listen() {
    // Listen the server
    app.listen(port, address)
    console.log(`Server listening on http://${address}:${port}`)
}