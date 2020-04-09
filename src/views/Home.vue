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

        <!-- 列表的进入离开 过渡 -->
        <transition-group tag="ul" class="articles" name="list">
          <li v-for="article in articles" :key="article.id" class="article">
            <div class="card">
              <h3 class="card-title">
                {{article.title}}
              </h3>
              <p class="card-info">
                <span class="nick-name">{{article.author}}</span>
                <span class="created-time">{{article.time | formated}}</span>
              </p>
              <p class="card-desc">{{article.desc}}</p>
              <ul class="card-tags">
                <li class="card-tag" v-for="item in article.tags" :key="item">{{item}}</li>
              </ul>
            </div>
          </li>
        </transition-group>
      </div>
    </section>
    <section class="block right">
      <h3 class="title">
        我是右侧影响力 block
      </h3>
       <div class="right-container">
        <section class="original-articles">最近输出文章</section>
        <section class="original-projects">最近研究项目</section>
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
    Slider
    /* You are using the runtime-only build of Vue where the template compiler is not available. Either pre-compile the templates into render functions, or use the compiler-included build. */
    // 'x-b': { render: h => { return h('div', {}, 'b') } }
    // 'x-a': (h) => h(<div>comp A</div>),
    // 'x-b': (h) => h(<div>comp B</div>)

  },
  filters: {
    formated (val) {
      return val
    }
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
        { title: '这个地方是列表', id: 0, author: 'zhazhahui', time: new Date().getTime(), desc: '我是描述，不一样的描述', tags: ['前端', '运维', '工程化', '产品'] },
        { title: '这个地方是列表', id: 1, author: 'zhazhahui', time: new Date().getTime(), desc: '我是描述，不一样的描述', tags: ['前端', '运维', '工程化', '产品'] },
        { title: '这个地方是列表', id: 2, author: 'zhazhahui', time: new Date().getTime(), desc: '我是描述，不一样的描述', tags: ['前端', '运维', '工程化', '产品'] },
        { title: '这个地方是列表', id: 3, author: 'zhazhahui', time: new Date().getTime(), desc: '我是描述，不一样的描述', tags: ['前端', '运维', '工程化', '产品'] },
        { title: '这个地方是列表', id: 4, author: 'zhazhahui', time: new Date().getTime(), desc: '我是描述，不一样的描述', tags: ['前端', '运维', '工程化', '产品'] },
        { title: '这个地方是列表', id: 5, author: 'zhazhahui', time: new Date().getTime(), desc: '我是描述，不一样的描述', tags: ['前端', '运维', '工程化', '产品'] },
        { title: '这个地方是列表', id: 6, author: 'zhazhahui', time: new Date().getTime(), desc: '我是描述，不一样的描述', tags: ['前端', '运维', '工程化', '产品'] },
        { title: '这个地方是列表', id: 7, author: 'zhazhahui', time: new Date().getTime(), desc: '我是描述，不一样的描述', tags: ['前端', '运维', '工程化', '产品'] }
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
    // this.log('我真的可以调用')
  }

}
</script>

<style lang="scss" scoped>
$bgcolor: #f0f2f5;

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
    background: #F0F2F5;
    &-container {
      margin:  10px 0 10px 0;
      padding:  0 0 10px 0;

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
          padding: 24px 32px;
          outline: none;
          text-align: left;
          .card {
            &-title {
              font-size: 21px;
              color: rgba($color: #000000, $alpha: .85);
            }

            &-info {
              font-size: 13px;
              color: rgba($color: #000000, $alpha: .65);
            }

            &-desc {
              margin: 14px 0;
              font-size: 16px;
              color: rgba($color: #000000, $alpha: .65);
            }

            &-tags {
              text-decoration: none;
              list-style: none;
              display: flex;
              .card-tag {
                background: #fafafa;
                color: rgba($color: #000000, $alpha: .65);
                margin: 0 7px 0 0;
                padding: 0 8px;
                font-size: 12px;
                border-radius: 4px;
                border: 1px solid #d9d9d9;
              }
            }
          }

        }
      }
    }
  }

  .right {
    flex:1;
    background: #fff;
    margin: 10px;
    padding: 20px;
    &-container {
      display: flex;
      flex-direction: column;
      .original-articles, .original-projects {
        min-height: 200px;
      }
    }
  }

}
</style>
