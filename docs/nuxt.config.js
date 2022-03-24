import theme from '@nuxt/content-theme-docs';

export default theme({
  router: {
    base: '/uniform/'
  },
  static: {
    prefix: true
  },
  plugins: ['~~/plugins/uniform.js'],
  docs: {
    primaryColor: '#4ca0ff'
  }
});
