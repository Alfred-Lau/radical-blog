const path = require('path');

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
