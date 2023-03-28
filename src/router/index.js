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
    path: '/Contacts',
    name: 'Contacts',
    component: () => import('../views/TheContacts.vue'),
  },
  {
    path: '/TicTacToe',
    name: 'TicTacToe',
    component: () => import('../views/TicTacToe.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  routes,
});

export default router;
