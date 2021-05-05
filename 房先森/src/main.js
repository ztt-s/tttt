import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "@/assets/css/common.css";
import "@/assets/css/reset.css";
import "@/assets/js/app.js";

import  "/public/iconfont/iconfont.css"
Vue.config.productionTip = false;

import myButton from "@/components/Tools/Button.vue";
Vue.component("myButton", Vue.extend(myButton));
//我们在注册组件的时候 其实是需要用extend方法先把.vue文件变成一个vue实例，才能被注册成一个组件，我们在写的时候可以省略extend

import myInput from "@/components/Tools/Input.vue";
Vue.component("myInput", myInput);

// import myLoading from "@/components/Tools/Loading/Loading.vue";
// Vue.component("myLoading", myLoading);



// // index里使用了install方法 所以可以用use扩展全局方法
// import $loading from "@/components/Tools/Loading/index.js";
// Vue.use($loading);

import myStep from "@/components/Tools/Step/Step.vue";
Vue.component("myStep", myStep);

import myPagination from "@/components/Tools/Pagination/Pagination.vue";
Vue.component("myPagination", myPagination);

import myMask from "@/components/Tools/Mask/Mask.vue";
Vue.component("myMask", myMask);

import myAdd from "@/components/Tools/Add/Add.vue";
Vue.component("myAdd", myAdd);

//引入 图标
import  "@/assets/iconfont/iconfont.css";
import  "@/assets/iconfont/demo.css";

new Vue({
    router,
    store,
    render: (h) => h(App),
}).$mount("#app");