const pluginName = 'LogWebpackPlugin';

class LogWebpackPlugin {
  constructor(opt) {
    console.log('optis', opt);
  }

  apply(compiler) {
    compiler.hooks.run.tap(pluginName, compilation => {
      console.log('The webpack build process is starting!!!');
    });
  }
}

module.exports = LogWebpackPlugin;
