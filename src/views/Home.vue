<template>
  <div class="home">
    <section class="block left">
      <div class="left-container">
        我是左侧 block
      </div>
    </section>
    <section class="block main">
      <div class="main-container">
        <button @click="show = !show">切换我</button>

        中心放我的原创文章
        <transition name="fade">
          <span v-show="show" style="display:block;">请控制我的显示</span>
        </transition>
      </div>
    </section>
    <section class="block right">
       <div class="right-container">
        我是右侧影响力 block
      </div>
    </section>
  </div>
</template>

<script>
// @ is an alias to /src
import { log } from '@/scripts/mixin'

export default {
  name: 'Home',
  mixins: [log],
  mounted () {
    this.log('我真的可以调用')
  },
  data () {
    return {
      show: false
    }
  }
}
</script>

<style lang="scss" scoped>
$bgcolor: #ddd;

.home {
  background: $bgcolor;
  display: flex;
  flex-direction: row;

  height: 100%;
  .block {

  }

  .left{
    flex: 1;
    &-container {
      background: #fff;
      margin: 10px;
      padding: 20px;
    }
  }

  .main {
    flex: 2;
    &-container {
        background: #fff;
        margin: 10px;
        padding: 20px;

        .fade-enter-active, .fade-leave-active {
          transition: opacity .5s;
        }
        .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
          opacity: 0;
        }
    }
  }

  .right {
    flex:1;
    &-container {
      background: #fff;
      margin: 10px;
      padding: 20px;
    }
  }

}
</style>
