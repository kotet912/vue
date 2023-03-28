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
  {
    path: '/about',
    name: 'TheAbout',
    component: () => import('../views/TheAbout.vue'),
  },
  {
    path: '/services',
    name: 'TheServices',
    component: () => import('../views/TheServices.vue'),
  },
  {
    path: '/contacts',
    name: 'Contacts',
    component: () => import('../views/TheContacts.vue'),
  },
  {
    path: '/ticTacToe',
    name: 'TicTacToe',
    component: () => import('../views/TicTacToe.vue'),
  },
  {
    path: '/chart',
    name: 'ChartPage',
    component: () => import('../views/ChartPage.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  routes,
});

export default router;
