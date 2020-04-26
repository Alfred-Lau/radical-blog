<template>
  <div class="home">
    <section class="block left">
      <div class="left-container">
        <p class="ask">你想问什么,万一有回复呢</p>
        <input type="text" name="question" id="question">
      </div>
    </section>
    <section class="block main">
      <div class="main-container">
        <Slider></Slider>
      </div>
      <div class="ul">
        <!-- 列表的进入离开 过渡 -->
        <transition-group tag="ul" class="articles" name="list">
          <li v-for="article in articles" :key="article.id" class="article">
            <div class="card">
              <h3 class="card-title">
                {{ article.title }}
              </h3>
              <p class="card-info">
                <span class="nick-name">{{ article.author }}</span>
                <span class="created-time">{{ article.time | formated }}</span>
              </p>
              <p class="card-desc">{{ article.desc }}</p>
              <ul class="card-tags">
                <li class="card-tag" v-for="item in article.tags" :key="item">
                  {{ item }}
                </li>
              </ul>
            </div>
          </li>
        </transition-group>
      </div>
    </section>
    <section class="block right">
      <h3 class="title">
        持续输出
      </h3>
      <div class="right-container">
        <section class="original-articles">
          <h4>在看</h4>
          <div class="originals">
            <ul>
              <li class="original" v-for="item in originals" :key="item.id">
                <a :href="item.link">
                  <div class="wrapper">
                    {{ item.title }}
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </section>
        <section class="original-projects">
          <h4>在写</h4>
           <div class="projects">
            <ul>
              <li class="project" v-for="item in projects" :key="item.id">
                <a :href="item.link">
                  <div class="wrapper">
                    {{ item.title }}
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </section>
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
      originals: [
        {
          id: 1,
          tag: ['vue'],
          title: 'Vue 2.6.11 源码拜读'
        },
        {
          id: 2,
          tag: ['react'],
          title: 'React 16.8 源码拜读'
        },
        {
          id: 3,
          tag: ['react'],
          title: 'Redux React-Router React-Redux 源码细读'
        },
        {
          id: 4,
          tag: ['vue'],
          title: 'Vuex Vue-Router 源码细读'
        },
        {
          id: 5,
          tag: ['framework'],
          title: '司徒大佬框架设计'
        },
        {
          id: 6,
          tag: ['engineer'],
          title: 'webpack 5'
        }
      ],
      projects: [
        { id: 1, title: '商城应用', link: '' },
        { id: 2, title: '重构火车APP', link: '' },
        { id: 3, title: 'TS 重写 Axios', link: '' },
        { id: 4, title: 'Vue TS 搭建自己的组件库', link: '' },
        { id: 5, title: 'vue-mooker', link: '' },
        { id: 6, title: '依据模板字符串和tapable 实现的模板引擎', link: '' }
      ],
      view: 'x-a',
      show: false,
      showp: false,
      showa: false,
      items: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
      articles: [
        {
          title: '这个地方是列表',
          id: 0,
          author: 'zhazhahui',
          time: new Date().getTime(),
          desc: '我是描述，不一样的描述',
          tags: ['前端', '运维', '工程化', '产品']
        },
        {
          title: '这个地方是列表',
          id: 1,
          author: 'zhazhahui',
          time: new Date().getTime(),
          desc: '我是描述，不一样的描述',
          tags: ['前端', '运维', '工程化', '产品']
        },
        {
          title: '这个地方是列表',
          id: 2,
          author: 'zhazhahui',
          time: new Date().getTime(),
          desc: '我是描述，不一样的描述',
          tags: ['前端', '运维', '工程化', '产品']
        },
        {
          title: '这个地方是列表',
          id: 3,
          author: 'zhazhahui',
          time: new Date().getTime(),
          desc: '我是描述，不一样的描述',
          tags: ['前端', '运维', '工程化', '产品']
        },
        {
          title: '这个地方是列表',
          id: 4,
          author: 'zhazhahui',
          time: new Date().getTime(),
          desc: '我是描述，不一样的描述',
          tags: ['前端', '运维', '工程化', '产品']
        },
        {
          title: '这个地方是列表',
          id: 5,
          author: 'zhazhahui',
          time: new Date().getTime(),
          desc: '我是描述，不一样的描述',
          tags: ['前端', '运维', '工程化', '产品']
        },
        {
          title: '这个地方是列表',
          id: 6,
          author: 'zhazhahui',
          time: new Date().getTime(),
          desc: '我是描述，不一样的描述',
          tags: ['前端', '运维', '工程化', '产品']
        },
        {
          title: '这个地方是列表',
          id: 7,
          author: 'zhazhahui',
          time: new Date().getTime(),
          desc: '我是描述，不一样的描述',
          tags: ['前端', '运维', '工程化', '产品']
        }
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
      Velocity(
        el,
        {
          rotateZ: '45deg',
          translateY: '30px',
          translateX: '30px',
          opacity: 0
        },
        { complete: done }
      )
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

  .left {
    width: 300px;
    &-container {
      background: #fff;
      margin: 10px;
      padding: 20px;
    }
  }

  .main {
    flex: 1;
    background: #f0f2f5;
    &-container {
      margin: 10px 0 10px 0;
      padding: 0 0 10px 0;
    }

    // 定义 CSS变形 transition 和 CSS动画 animation 的时机

    .fade-enter-active,
    .fade-leave-active {
      transition: opacity 0.5s;
    }
    /* TODO：如果不定义 to 的状态 会出现先直接卸载 DOM，opacity 会无法挂载导致动画效果失效！！！ */
    /* TODO： v-enter-to 和 v-leave 是组件完成挂载之后的正常显示状态，所以不需要单独设置，继承的样式即是它们的样式！！ */
    .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
      opacity: 0;
    }

    .p-enter-active {
      animation: bounce-in 0.5s;
    }
    .p-leave-active {
      animation: bounce-in 0.5s reverse;
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

    .list-enter-active,
    .list-leave-active {
      transition: opacity 0.5s;
    }

    .list-enter,
    .list-live-to {
      opacity: 0;
    }

    .list-move {
      transition: transform 1s;
    }

    .articles {
      margin: 20px 0;
      .article {
        background-image: linear-gradient(208deg, #39a1f7 0%, #a875ff 100%);
        box-shadow: 0 2px 15px 0 rgba(74, 144, 226, 0.6);
        text-shadow: 0 2px 15px rgba($color: #d9d9d9, $alpha: 0.65);
        border-radius: 8px;
        font-family: PingFangSC-Regular;
        font-size: 16px;
        color: #ffffff;
        font-family: Helvetica;
        letter-spacing: -0.39px;
        opacity: 0.8;
        font-family: Helvetica;
        color: #000000;
        margin-bottom: 20px;
        padding: 15px;
        .card {
          &-title {
            font-size: 21px;
            color: rgba($color: #000000, $alpha: 0.85);
          }

          &-info {
            font-size: 13px;
            color: rgba($color: #000000, $alpha: 0.65);
          }

          &-desc {
            margin: 14px 0;
            font-size: 16px;
            color: rgba($color: #000000, $alpha: 0.65);
          }

          &-tags {
            text-decoration: none;
            list-style: none;
            display: flex;
            .card-tag {
              background: #fafafa;
              color: rgba($color: #000000, $alpha: 0.65);
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

  .right {
    background: #fff;
    margin: 10px;
    padding: 20px;
    width: 300px;
    &-container {
      display: flex;
      flex-direction: column;
      .original-articles,
      .original-projects {
        min-height: 200px;
      }
    }
  }
}
</style>
