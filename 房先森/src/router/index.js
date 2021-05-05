import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [{
        path: "/",
        name: "Home",
        component: () =>
            import ("@/views/Home.vue"),
    },
    // 14方案详情
    {
        path: "/foue",
        name: "foue",
        component: () =>
            import ("@/views/foue.vue"),
    },

    // 20联系我们
    {
        path: "/contact",
        name: "contact",
        component: () =>
            import ("@/views/contact.vue"),
    },
    // 6图片详情页
    {
        path: "/detail",
        name: "detail",
        component: () =>
            import ("@/views/detail.vue"),
    },
    // 2装修攻略
    {
        path: "/index",
        name: "index",
        component: () =>
            import ("@/views/index.vue"),
    },
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
});

export default router;