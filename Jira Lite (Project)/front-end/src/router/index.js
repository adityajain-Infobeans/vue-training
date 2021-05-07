import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Logout from '../views/Logout.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  // },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: () => import(/* webpackChunkName: "dashboard" */ '../views/Dashboard.vue'),
  },
  {
    path: '/addticket',
    name: 'Add Ticket',
    component: () => import(/* webpackChunkName: "addticket" */ '../views/AddTicket.vue'),
  },
  {
    path: '/updateticket',
    name: 'Update Ticket',
    component: () => import(/* webpackChunkName: "updateticket" */ '../views/UpdateTicket.vue'),
  },
  {
    path: '/viewticket',
    name: 'View Ticket',
    component: () => import(/* webpackChunkName: "viewticket" */ '../views/ViewTicket.vue'),
  },
  {
    path: '/logout',
    name: 'Logout',
    component: Logout,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
