import theme from '@nuxt/content-theme-docs';

export default theme({
  router: {
    base: '/uniform/'
  },
  plugins: ['~~/plugins/uniform.js'],
  docs: {
    primaryColor: '#4ca0ff'
  }
});
