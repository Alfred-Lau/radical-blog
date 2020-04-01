/* eslint-disable @typescript-eslint/no-explicit-any */
export default class LogPlugin {
  static install (vue: any) {
    // console.log('vye', vue, options)
    vue.prototype.log = 'print'
  }
}
