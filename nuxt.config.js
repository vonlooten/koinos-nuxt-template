export default {
    // Meta Tags
    head: {
        title: 'My dApp title',
        meta: [
          { charset: 'utf-8' },
          { name: 'viewport', content: 'width=device-width, initial-scale=1' },
          {
            hid: 'description',
            name: 'description',
            content: 'my website description'
          }
        ],
        link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
    },

    // CSS
    css: ['~/assets/css/index.css'],

    axios: {
        // proxy: true
    },
    image: {
        // Options
    },

    modules: [
        // https://image.nuxtjs.org/getting-started/installation if you want to use it in static, change to buildModules
        '@nuxt/image',
        // https://axios.nuxtjs.org/setup
        '@nuxtjs/axios',
    ],

    build: {

    }
}