import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path:"/",
    redirect:"/zxfa",
   },
  {
    path: "/",
    name: "Home",
    component: () => import("@/views/Home.vue"),
  },
  {
    path: "/lql",
    name: "lql",
    component: () => import("../views/lql.vue"),
  },
  {
    path: "/quanquan",
    name: "quanquan",
    component: () => import("../views/quanquan.vue"),
  },
  {
    path: "/zxfa",
    name: "zxfa",
    component: () => import("../views/zxfa.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
