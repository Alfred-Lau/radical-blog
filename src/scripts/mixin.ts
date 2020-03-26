import Vue from 'vue'

export const log = Vue.mixin({
  created () {
    console.log('我是注入 Mixin')
  }
})
