import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Default",
    component: () => import('../layouts/Default.vue'),
    children: [
      {
        path: '', component: () => import('../views/HomePage.vue')
      },
      {
        path: '/details/:id', component: () => import('../views/SingleEmail.vue')
      },
      {
        path: '/new-email', component: () => import('../views/SendEmail.vue')
      },
      {
        path: '/layout',    component:() => import('../layouts/GridImageLayout.vue')
      }
    ]
  },
  {
    path: '*',
    component: () => import('../views/Error404.vue')
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
