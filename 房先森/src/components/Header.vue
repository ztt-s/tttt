<template>
  <div class="">
    <div class="top">
      <span id="imgs">
        <img src="/logo.png" alt="" />
      </span>

      <slot> </slot>

      <!-- 头部组件 -->

      <span>
        <i class="iconfont icon-nav"></i>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  mounted() {},
  methods: {},
};
</script>

<style>
.top {
  text-align: center;
  height: 1.5rem;
  line-height: 1.5rem;

  /* background: red; */
}
#imgs {
  width: 0.4rem;
  height: 0.4rem;
  float: left;
}
#imgs > img {
  margin-top: 0.1rem;
  margin-left: 0.3rem;
  width: 2.6rem;
  height: 1.2rem;
}
.icon-nav {
  float: right;
}
</style>
