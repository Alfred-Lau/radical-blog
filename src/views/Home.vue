<template>
  <div class="home">
    <section class="block left">
      <div class="left-container">
        <p class="ask">你想问什么,万一有回复呢</p>
        <input type="text" name="question" id="question" class="ask-input" />
      </div>
      <div class="work-hard left-container">
        <div class="work-calander">
          <calendar @day="handleDay"></calendar>
        </div>
      </div>

      <div class="hot-spot left-container">
        <h3 class="read-it-later">
          稍后阅读
        </h3>
        <section class="read-it-later-content">
          <ul>
            <li v-for="item in reads" :key="item.id">
              <div class="read-content">
                <i class="icon hot">*</i>
                <p class="read-main">{{ item.content }}</p>
              </div>
            </li>
          </ul>
        </section>
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
                <span class="created-time">{{
                  article.createdAt | formated
                }}</span>
              </p>
              <p class="card-desc">{{ article.desc }}</p>
              <ul class="card-tags">
                <li
                  class="card-tag"
                  v-for="item in getTags(article.tag)"
                  :key="item"
                >
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
        TOP HIT
      </h3>
      <div class="right-container">
        <section class="original-projects">
          <h4>------&nbsp;&nbsp;&nbsp;在写&nbsp;&nbsp;&nbsp;------</h4>
          <div class="projects">
            <ul>
              <li class="project" v-for="item in projects" :key="item.id">
                <a :href="item.link">
                  <div class="wrapper">
                    <img src="/imgs/project-bg.png" alt="project-bg" />
                    {{ item.title }}
                  </div>
                  <div class="show-detail-modal">{{ item.content }}</div>
                </a>
              </li>
            </ul>
          </div>
        </section>
        <section class="original-articles">
          <h4>------&nbsp;&nbsp;&nbsp;在看&nbsp;&nbsp;&nbsp;------</h4>
          <div class="originals">
            <ul>
              <li class="original" v-for="item in originals" :key="item.id">
                <a :href="item.link">
                  <div class="wrapper">
                    <div>
                      <span> {{ item.title }}</span>
                    </div>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </section>
    <transition name="slide-fade">
      <welcome
        v-if="showWelcome"
        @stay="stay"
        @goToNewSite="goToNewSite"
      ></welcome
    ></transition>
  </div>
</template>

<script>
// @ is an alias to /src
import { log } from "@/scripts/mixin";
import Slider from "@/base/Slider/slider";
import Calendar from "@/components/Calendar/calendar";
import Welcome from "@/components/Welcome/welcome";
import moment from "moment";

// 这是一种 cjs 方式兼容 脚本方式的用法！
const Velocity = window.Velocity;
const _ = window._;

export default {
  // 其他
  name: "Home",
  components: {
    Calendar,
    Slider,
    Welcome
    /* You are using the runtime-only build of Vue where the template compiler is not available. Either pre-compile the templates into render functions, or use the compiler-included build. */
    // 'x-b': { render: h => { return h('div', {}, 'b') } }
    // 'x-a': (h) => h(<div>comp A</div>),
    // 'x-b': (h) => h(<div>comp B</div>)
  },
  filters: {
    formated(val) {
      const SHOW_TYPE = "YYYY-MM-DD";
      return moment(val).format(SHOW_TYPE);
    }
  },
  // 数据
  data() {
    return {
      showWelcome: true,
      reads: [],
      originals: [
        {
          id: 1,
          tag: ["vue"],
          title: "Vue 2.6.11 源码拜读"
        },
        {
          id: 2,
          tag: ["react"],
          title: "React 16.8 源码拜读"
        },
        {
          id: 3,
          tag: ["react"],
          title: "Redux React-Router React-Redux 源码细读"
        },
        {
          id: 4,
          tag: ["vue"],
          title: "Vuex Vue-Router 源码细读"
        },
        {
          id: 5,
          tag: ["framework"],
          title: "司徒大佬框架设计"
        },
        {
          id: 6,
          tag: ["engineer"],
          title: "webpack 5"
        }
      ],
      projects: [
        {
          id: 1,
          title: "商城应用",
          link: "http://xiaomimall.lazy-minus-your-intelligence.com/#/",
          content: "使用 Vue 2.6.11 开发的电商 PC 网站"
        },
        {
          id: 2,
          title: "H5 外卖",
          link: "http://h5waimai.lazy-minus-your-intelligence.com",
          content: "使用 Vue 2.0.x 开发的 H5 外卖程序"
        },
        {
          id: 3,
          title: "个人项目开发看板",
          link: "http://project.lazy-minus-your-intelligence.com",
          content: "个人项目开发进度和灵感记录看板，以及网站后续发展开发规划"
        },
        { id: 4, title: "重构火车APP", link: "", content: "React Hooks!" },
        {
          id: 5,
          title: "Vue TS 搭建自己的组件库",
          link: "http://magic.lazy-minus-your-intelligence.com/",
          content: "没有自己组件库的程序员是不完整的~【手工狗头】"
        },
        {
          id: 6,
          title: "个人网站小程序版本",
          link: "",
          content: "移动端的程序员 hack"
        },
        {
          id: 7,
          title: "TS 重写 Axios",
          link: "https://github.com/Alfred-Lau/ts-axios",
          content: "此处是个轮子"
        },
        {
          id: 8,
          title: "vue-mooker",
          link: "https://github.com/Alfred-Lau/vue-mocker-testcase",
          content: 'Vue 的 mock 插件，"我"还能做的更多！'
        },
        {
          id: 9,
          title: "模板引擎",
          link: "https://github.com/Alfred-Lau/fast-template-engine",
          content: "基于 es6 字符串实现模板引擎"
        },
        {
          id: 10,
          title: "mirror",
          link: "https://github.com/Alfred-Lau/mirror",
          content: "@cli/core的缘起之作，只支持命令行有限操作"
        },
        {
          id: 11,
          title: "天工",
          link: "https://github.com/Alfred-Lau/TianGong",
          content: "个人效率神器，Electron，套路大全"
        },
        {
          id: 12,
          title: "@cli/core",
          link: "https://github.com/Alfred-Lau/cli_core_codebase",
          content: "@cli/core的缘起之作，只支持命令行有限操作"
        },
        {
          id: 13,
          title: "Vscode emmet 定制扩展",
          link: "https://github.com/Alfred-Lau/emmit",
          content: "@cli/core的缘起之作，只支持命令行有限操作"
        },
        {
          id: 14,
          title: "天工",
          link: "https://github.com/Alfred-Lau/fast-template-engine",
          content: "@cli/core的缘起之作，只支持命令行有限操作"
        },
        {
          id: 15,
          title: "个人网站Flutter版本",
          link: "",
          content: "@cli/core的缘起之作，只支持命令行有限操作"
        }
      ],
      view: "x-a",
      show: false,
      showp: false,
      showa: false,
      items: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
      articles: []
    };
  },

  // 行为
  methods: {
    stay() {
      this.showWelcome = false;
    },
    goToNewSite() {
      this.showWelcome = false;
      window.location.href = "http://lazy-minus-your-intelligence.com/";
    },
    handleDay(data) {
      const { year, month, week, day } = data;
      const msg = `you clicked ${year} 年${month}月 ${day}日，是第 ${week} 周.`;
      alert(msg);
    },
    async loadData() {
      const articles = await this.$api.getArticles();
      this.articles = articles;
    },

    getTags(tag) {
      return tag.split(",");
    },
    shuffle() {
      this.articles = _.shuffle(this.articles);
    },
    beforeEnter: function(el) {
      el.style.opacity = 0;
      el.style.transformOrigin = "left";
    },
    enter: function(el, done) {
      Velocity(el, { opacity: 1, fontSize: "1.4em" }, { duration: 300 });
      Velocity(el, { fontSize: "1em" }, { complete: done });
    },
    leave: function(el, done) {
      Velocity(el, { translateX: "15px", rotateZ: "50deg" }, { duration: 600 });
      Velocity(el, { rotateZ: "100deg" }, { loop: 2 });
      Velocity(
        el,
        {
          rotateZ: "45deg",
          translateY: "30px",
          translateX: "30px",
          opacity: 0
        },
        { complete: done }
      );
    }
  },

  // helper
  mixins: [log],

  // 生命周期
  mounted() {
    // this.log('我真的可以调用')
    this.loadData();
  }
};
</script>

<style lang="scss" scoped>
@import "../common/index.scss";

.home {
  background: var(--bgcolor);
  display: flex;
  flex-direction: row;
  height: 100%;

  /* 可以设置不同的进入和离开动画 */
  /* 设置持续时间和动画函数 */
  .slide-fade-enter-active {
    transition: all 0.3s ease;
  }
  .slide-fade-leave-active {
    transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
  }
  .slide-fade-enter,
  .slide-fade-leave-to {
    opacity: 0;
  }

  .left {
    width: 300px;
    min-width: 300px;
    &-container {
      background: #fff;
      margin: 10px;
      padding: 20px;
      border-radius: 6px;
      .ask {
      }

      .ask-input {
        width: 90%;
        margin: 20px auto;
        outline: none;
        border-radius: 6px;
        padding: 0 8px;
        height: 36px;
      }
    }

    .hot-spot {
      .read-it-later {
      }

      .read-it-later-content {
        li {
          position: relative;
          margin: 8px 0;
          padding: 6px 0;
        }

        .read-content {
          display: flex;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          .read-main {
          }
        }
      }
    }
  }

  .main {
    flex: 1;
    background: var(--bgcolor);
    overflow: hidden;
    &-container {
      margin: 10px 0 10px 0;
      padding: 0 0 10px 0;
      .ask {
      }

      .ask-input {
        width: 94%;
        height: 36px;
        margin: 20px auto;
        border-radius: 10px;
        outline: none;
        padding: 0 8px;
      }
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
      margin: 10px 0;
      padding: 10px;
      .article {
        background-image: linear-gradient(208deg, #272829 0%, #9e8cbd 100%);
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
        text-align: left;
        &:hover {
          cursor: pointer;
        }
        .card {
          &-title {
            font-size: 21px;
            color: rgba($color: #000000, $alpha: 0.85);
          }

          &-info {
            font-size: 13px;
            color: rgba($color: #000000, $alpha: 0.65);
            margin-top: 8px;
            .nick-name {
              font-size: 12px;
              color: currentColor;
            }

            .created-time {
              padding-left: 10px;
              font-size: 12px;
            }
          }

          &-desc {
            margin: 20px 0;
            font-size: 14px;
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
    min-width: 300px;
    border-radius: 6px;
    &-container {
      display: flex;
      flex-direction: column;
      .original-articles,
      .original-projects {
        min-height: 200px;
      }

      .original-articles {
        margin-top: 30px;
        .originals {
          padding: 10px;
          text-align: left;
          ul {
            .original {
              box-sizing: border-box;
              padding: 6px 8px;
              margin-bottom: 10px;
              background: #eee;
              color: #222;
              border-radius: 8px;
              &:hover {
                cursor: pointer;
              }

              a {
                .wrapper {
                  overflow: hidden;
                  white-space: nowrap;
                  text-overflow: ellipsis;
                }
              }
            }
          }
        }
      }

      .original-projects {
        margin-top: 20px;
        .projects {
          margin-top: 20px;

          ul {
            display: flex;
            /* 这是每行三个的核心所在 */
            flex-wrap: wrap;
            .project {
              list-style: none;
              flex: 0 0 calc(50% - 10px);
              margin-right: 10px;
              margin-bottom: 20px;
              position: relative;

              .show-detail-modal {
                position: absolute;
                top: 0;
                left: 0;
                opacity: 0;
                height: 0;
                width: 0;
                font-size: 12px;
                background: #110;
                border-radius: 6px;
                color: #fff;
                transition: all 0.6s;
              }
              a {
                .wrapper img {
                  width: 100%;
                }
                .wrapper {
                  background-color: white;
                  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2),
                    0 6px 20px 0 rgba(0, 0, 0, 0.19);
                  border-radius: 4px;
                  height: 160px;
                  font-size: 14px;
                  padding-bottom: 10px;
                  color: darkgreen;
                  background: rgba(90, 90, 190, 0.6);
                }
                .wrapper span {
                  font-size: 12px;
                  color: #bfbfbf;
                  display: block;
                  letter-spacing: 2px;
                }
              }

              &:hover {
                .show-detail-modal {
                  position: absolute;
                  top: 0;
                  left: 0;
                  display: block;
                  opacity: 0.8;
                  height: 100%;
                  width: 100%;
                  background: #d9d9d9;
                  font-size: 12px;
                  background: #110;
                  border-radius: 6px;
                  color: #fff;
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>

<docs>

nothing happend just now！！！
</docs>
