
export default class LogPlugin {
  static install (vue: any, options: any) {
    console.log('vye', vue, options)
    vue.prototype.log = console.log
  }
}
