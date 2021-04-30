<template>
  <div>
    <!-- <my-swiper :list="list" autoplay></my-swiper> -->
    <i class="iconfont">&#x33;</i>

    <header></header>
  </div>
</template>

<script>
import header from "../components/Header.vue";
import "/public/iconfont/iconfont.css";
export default {
  // 注册组件
  comments: {
    header,
  },
  data() {
    return {};
  },
  mounted() {},
  // components: {
  //   mySwiper,
  // },
};
</script>
