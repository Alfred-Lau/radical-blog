import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Work from '../views/Work.vue';
import Life from '../views/Life.vue';
import Css from '../views/Css.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/piecework',
    name: 'Work',
    component: Work,
    children: [{
      path: 'css',
      name: 'css',
      component: Css
    }]
  },
  {
    path: '/meaning',
    name: 'Life',
    component: Life
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  /* 滚动行为 */
  scrollBehavior (to, from, savedPosition) {
    return { x: 420, y: 420 };
  },
  routes
});

export default router;
