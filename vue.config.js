/* eslint-disable @typescript-eslint/no-var-requires */
const LogWebpackPlugin = require("./plugins/LogWebpackPlugin");
const DeployWebpackPlugin = require("./plugins/DeployWebpackPlugin");
const ZipPlugin = require("./plugins/ZipPlugin");
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
    api.plugins.push(new LogWebpackPlugin({}));

    api.plugins.push(
      new DeployWebpackPlugin({
        publicPath: "path to deploy",
        replace: true
      }),
      process.env.NODE_ENV === "production" &&
        new ZipPlugin({ filename: "aliyun" })
    );
  },
  chainWebpack(api) {
    api.plugin("html").tap(args => {
      args[0] = { ...args[0], title: "Stay Hungry. Stay Focus." };
      return args;
    });

    api.module
      .rule("docs")
      .resourceQuery(/blockType=docs/)
      .use("docs")
      .loader(require.resolve("./loaders/docs-loader.js"));
  }
};
