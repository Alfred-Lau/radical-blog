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
  }
};
