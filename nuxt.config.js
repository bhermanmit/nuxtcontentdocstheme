import theme from '@nuxt/content-theme-docs'

export default theme({
  docs: {
    primaryColor: '#E24F55',
  },

  head: {
    title: 'nuxt',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: 'icon.png' }],
  },

  router: {
    base: '/nuxtcontentdocstheme/'
  },
})
