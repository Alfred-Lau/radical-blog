module.exports = {
  chainWebpack (api) {
    api
      .plugin('html')
      .tap(args => {
        args[0] = { ...args[0], title: '十年挑灯看剑' }
        return args
      })
  }
}
