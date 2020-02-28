module.exports = {
  devServer: {
    port: 8070,
    disableHostCheck: true,
    proxy: {
      '/doctor': {
        target: 'http://localhost:5000',
        changeOrigin: true,
        secure: false
      }
    }
  },
  "transpileDependencies": [
    "vuetify"
  ],
}