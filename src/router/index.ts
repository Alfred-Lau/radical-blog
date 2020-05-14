import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/Home.vue";
import Work from "@/views/Work.vue";
import Life from "@/views/Life.vue";
import Css from "@/views/Css.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/piecework",
    name: "Work",
    component: Work,
    children: [
      {
        path: "css",
        name: "css",
        component: Css
      }
    ]
  },
  {
    path: "/meaning",
    name: "Life",
    component: Life
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  }
  // {
  //   path: "/redirect",
  //   name: "Redirect",
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/About.vue"),
  //   /* 类比于 react-router 中的 Redirect 组件 */
  //   redirect: { name: "Work", params: { imageId: "image1" } }
  // }
];

const router = new VueRouter({
  mode: "hash",
  base: process.env.BASE_URL,
  /* 滚动行为 */
  scrollBehavior(to, from, savedPosition) {
    console.log(to, from, savedPosition);
    return { x: 0, y: 0 };
  },
  parseQuery(query) {
    console.log("我能做些什么parse", query);
    return query;
  },
  stringifyQuery(obj) {
    console.log("我能做些什么stringify", obj);
    return obj.toString();
  },
  routes
});

export default router;
