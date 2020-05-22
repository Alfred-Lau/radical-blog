const pluginName = "DeployWebpackPlugin";

class DeployWebpackPlugin {
  constructor(opt) {
    console.log("options", opt);
  }

  apply(compiler) {
    compiler.hooks.run.tap(pluginName, compilation => {
      console.log(
        "The  DeployWebpackPlugin webpack build process is starting!!!"
      );
    });
  }
}

module.exports = DeployWebpackPlugin;
