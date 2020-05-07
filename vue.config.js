/* eslint-disable @typescript-eslint/no-var-requires */
const LogWebpackPlugin = require('./plugins/LogWebpackPlugin');

module.exports = {
  pwa: {
    iconPaths: {
      favicon32: "favicon.ico",
      favicon16: "favicon.ico",
      appleTouchIcon: "favicon.ico",
      maskIcon: "favicon.ico",
      msTileImage: "favicon.ico"
    }
  },
  configureWebpack(api) {
    api.plugins.push(
      new LogWebpackPlugin({
      })
    );
  },
  chainWebpack(api) {
    api.plugin("html").tap(args => {
      args[0] = { ...args[0], title: "Stay Hungry. Stay Focus." };
      return args;
    });

    api.module
      .rule('docs')
      .resourceQuery(/blockType=docs/)
      .use('docs')
      .loader(require.resolve('./loaders/docs-loader.js'));
  }

};
