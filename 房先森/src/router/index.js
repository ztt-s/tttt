import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [{
        path: "/",
        redirect: "assess",
    },
    {
        path: "/designer",
        name: "Designer",
        component: () =>
            import ("../views/Designer.vue"),
    },
    {
        path: "/assess",
        name: "Assess",
        component: () =>
            import ("../views/Assess.vue"),
    },

    {
        path: "/designers",
        name: "Designers",
        component: () =>
            import ("../views/Designers.vue"),
    },
    {
        // 登录页面
        path: "/comment",
        name: "Comment",
        component: () =>
            import ("../views/Comment.vue"),
    },
    {
        // 装修贷款
        path: "/loan",
        name: "Loan",
        component: () =>
            import ("../views/Loan.vue"),
    },
    // {
    //     // 装修贷款
    //     path: "/zyp",
    //     name: "Zyp",
    //     component: () =>
    //         import ("../views/Zyp.vue"),
    // },
    // {
    //     component: "/designer",
    //     name: "designer",
    //     component: () =>
    //         import ("../views/Designer.vue"),
    // },
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
});

export default router;