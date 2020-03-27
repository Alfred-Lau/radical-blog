<template>
  <div class="home">
    <section class="block left">
      <div class="left-container">
        我是左侧 block
      </div>
    </section>
    <section class="block main">
      <div class="main-container">
        <Slider></Slider>
        <button @click="show = !show">切换我</button>

        中心放我的原创文章
        <!-- TODO： mode="out-in"  in-out 模式不是经常用到，但对于一些稍微不同的过渡效果还是有用的 -->
        <transition name="fade">
          <span v-show="show" style="display:block;">请控制我的显示</span>
        </transition>

        <!-- 实现一个 放大-缩小 动画效果 使用动画库的话，需要使用 自定义过渡类名-->
        <button @click="showp = !showp">切换我预览段落</button>
        <section style="overflow:hidden;">
          <transition name="p">
            <p v-show="showp">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat autem commodi repellendus sequi, laboriosam, esse iusto recusandae nemo dignissimos hic cupiditate quam ducimus ratione! Magni, accusamus? Minima veritatis cumque itaque!</p>
          </transition>
        </section>

        <!-- js hooks -->
        <section style="js-hooks">
          <button @click="showa = !showa">
            Toggle Animation!
          </button>
          <transition
            v-on:before-enter="beforeEnter"
            v-on:enter="enter"
            v-on:leave="leave"
            v-bind:css="false"
          >
            <p v-if="showa">
              Demo
            </p>
          </transition>
        </section>

        <!-- 多个组件的 过渡 -->

        <div><input type="radio" value="A" name="comp" @change="view = 'x-a'"/>A<input type="radio" value="B" name='comp' @change="view = 'x-b'"/>B</div>
        <section class="multi-comp">
          <component :is="view"></component>
        </section>

        <!-- 列表的进入离开 过渡 -->
        <button @click="shuffle"> 猜你喜欢 </button>
        <transition-group tag="ul" class="articles" name="list">
          <li v-for="article in articles" :key="article.id" class="article">
            <div class="card">
                {{article.title}}
            </div>
          </li>
        </transition-group>
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
import Slider from '@/base/Slider/slider'

// 这是一种 cjs 方式兼容 脚本方式的用法！
const Velocity = window.Velocity
const _ = window._

export default {
  // 其他
  name: 'Home',
  components: {
    Slider,
    /* You are using the runtime-only build of Vue where the template compiler is not available. Either pre-compile the templates into render functions, or use the compiler-included build. */
    'x-a': { render: h => { return h('div', {}, 'a') } },
    'x-b': { render: h => { return h('div', {}, 'b') } }
    // 'x-a': (h) => h(<div>comp A</div>),
    // 'x-b': (h) => h(<div>comp B</div>)

  },
  // 数据
  data () {
    return {
      view: 'x-a',
      show: false,
      showp: false,
      showa: false,
      items: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
      articles: [
        { title: '这个地方是列表', id: 0 },
        { title: '这个地方是列表', id: 1 },
        { title: '这个地方是列表', id: 2 },
        { title: '这个地方是列表', id: 3 },
        { title: '这个地方是列表', id: 4 },
        { title: '这个地方是列表', id: 5 },
        { title: '这个地方是列表', id: 6 },
        { title: '这个地方是列表', id: 7 }
      ]
    }
  },

  // 行为
  methods: {
    shuffle () {
      this.articles = _.shuffle(this.articles)
    },
    beforeEnter: function (el) {
      el.style.opacity = 0
      el.style.transformOrigin = 'left'
    },
    enter: function (el, done) {
      Velocity(el, { opacity: 1, fontSize: '1.4em' }, { duration: 300 })
      Velocity(el, { fontSize: '1em' }, { complete: done })
    },
    leave: function (el, done) {
      Velocity(el, { translateX: '15px', rotateZ: '50deg' }, { duration: 600 })
      Velocity(el, { rotateZ: '100deg' }, { loop: 2 })
      Velocity(el, {
        rotateZ: '45deg',
        translateY: '30px',
        translateX: '30px',
        opacity: 0
      }, { complete: done })
    }
  },

  // helper
  mixins: [log],

  // 生命周期
  mounted () {
    this.log('我真的可以调用')
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

      // 定义 CSS变形 transition 和 CSS动画 animation 的时机

      .fade-enter-active, .fade-leave-active {
        transition: opacity .5s;
      }
      /* TODO：如果不定义 to 的状态 会出现先直接卸载 DOM，opacity 会无法挂载导致动画效果失效！！！ */
      /* TODO： v-enter-to 和 v-leave 是组件完成挂载之后的正常显示状态，所以不需要单独设置，继承的样式即是它们的样式！！ */
      .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
        opacity: 0;
      }

      .p-enter-active {
        animation: bounce-in .5s;
      }
      .p-leave-active {
        animation: bounce-in .5s reverse;
      }
      @keyframes bounce-in {
        0% {
          transform: scale(0);
        }
        50% {
          transform: scale(1.5);
        }
        100% {
          transform: scale(1);
        }
      }

      .list-enter-active, .list-leave-active {
        transition: opacity .5s;
      }

      .list-enter, .list-live-to {
        opacity: 0;
      }

      .list-move {
         transition: transform 1s;
      }

      .articles{
        margin: 20px 0;
        .article {
          background: #fff;
          margin: 10px 0;
          padding: 10px;
          border: 1px solid #eeeeaa;

          height: 80px;
        }
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
