export default {
  /*
   ** Nuxt rendering mode
   ** See https://nuxtjs.org/api/configuration-mode
   */
  mode: 'universal',
  /*
   ** Nuxt target
   ** See https://nuxtjs.org/api/configuration-target
   */
  target: 'static',
  /*
   ** Headers of the page
   ** See https://nuxtjs.org/api/configuration-head
   */
  head: {
    title: 'Stwórzmy Twoją część internetu – Amadeusz Chomiak',
    htmlAttrs: {
      lang: 'pl',
    },
    meta: [
      // TODO add open graph tags
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          'Nie marnuj czasu zgadując, jakiej strony potrzebujesz. Wybierz specjalistę, który przeprowadzi Cię przez cały proces i zadba, aby Twoja nowa strona, była szybka, wygodna i elegancka.',
      },
    ],
    script: [
      {
        type: 'application/ld+json',
        json: {
          '@context': 'https://schema.org/',
          '@type': 'Person',
          name: 'Amadeusz Chomiak',
          url: 'https://amadeusz.dev/',
          image:
            'https://cdn.sanity.io/images/29z9xfxx/production/3a628b41bbf67a3395580c6c4de76b3273091183-437x437.jpg?h=437&fit=max&auto=format',
          sameAs: 'https://github.com/amadeusz-chomiak',
          jobTitle: 'Frontend developer & designer',
        },
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   ** https://nuxtjs.org/guide/plugins
   */
  plugins: [
    '~/plugins/polyfills',
    '~/plugins/focusLock',
    { src: '~/plugins/vueUnicons', mode: 'client' },
  ],
  /*
   ** Auto import components
   ** See https://nuxtjs.org/api/configuration-components
   */
  components: true,
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    '@nuxt/typescript-build',
    // Doc: https://github.com/nuxt-community/stylelint-module
    '@nuxtjs/stylelint-module',
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxtjs/composition-api',
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [],
  /*
   ** Build configuration
   ** See https://nuxtjs.org/api/configuration-build/
   */
  build: {
    extend(config) {
      // ..
      config.module.rules.find((loader) =>
        loader.test.toString().includes('png|jpe?g|gif|svg|webp')
      ).test = /\.(png|jpe?g|gif|webp)$/

      config.module.rules.push({
        test: /\.svg/,
        use: {
          loader: 'svg-url-loader',
          options: {},
        },
      })
      // Sets webpack's mode to development if `isDev` is true.
      // if (isDev) {
      //   config.mode = 'development'
      // }
    },
  },
  generate: {
    // choose to suit your project
    interval: 2000,
    fallback: '404.html',
  },
}
