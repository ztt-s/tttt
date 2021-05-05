import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/about",
  },
  {
    path: "/home",
    name: "home",
    component: () => import("../views/Home.vue"),
  },
  // 装修流程 
  {
    path: "/about",
    name: "about",
    component: () => import("../views/About.vue"),
  },
  // 文章详情
  {
    path: "/list",
    name: "list",
    component: () => import("../views/List.vue"),
  },
  // 文章详情 弹框
  {
    path: "/details",
    name: "details",
    component: () => import("../views/Details.vue"),
  },
  // 十秒报价
  {
    path: "/offer",
    name: "offer",
    component: () => import("../views/Offer.vue"),
  },
  // 关于我们
  {
    path: "/room",
    name: "room",
    component: () => import("../views/Room.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
