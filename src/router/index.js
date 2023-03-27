import Vue from 'vue';
import VueRouter from 'vue-router';


Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/Home.vue'),
  },
  {
    path: '/find-match',
    name: 'findMatch',
    component: () => import('../views/FindMatch.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  routes,
});

export default router;
