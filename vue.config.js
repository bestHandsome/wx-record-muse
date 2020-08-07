const path = require('path');
// const SentryWebpackPlugin = require("@sentry/webpack-plugin");

function resolve(dir) {
  return path.join(__dirname, dir);
}
module.exports = {
  chainWebpack: config => {
    config.plugins.delete('prefetch');
    config.resolve.alias
      .set('@', resolve('src'))
      .set('assets', resolve('src/assets'))
      .set('components', resolve('src/components'))
      .set('base', resolve('src/base'))
      .set('views', resolve('src/views'))
      .set('router', resolve('src/router'))
      .set('apis', resolve('src/apis'))
      .set('store', resolve('src/store'));
  },
  devServer: {
    overlay: {
      warnings: true,
      errors: false
    },
    disableHostCheck: true
  }
  // outputDir: "webapp",
  // productionSourceMap: false,
  // assetsDir: "webapp-static"
  // configureWebpack: {
  // 	plugins: [ sentryPluginGenerator() ]
  // }
};
