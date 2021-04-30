<template>
  <div>
    <div class="lun">
      <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
        <van-swipe-item><img src="/切图/banner1.jpg" alt=""/></van-swipe-item>
        <van-swipe-item><img src="/切图/banner2.jpg" alt=""/></van-swipe-item>
        <van-swipe-item><img src="/切图/banner3.jpg" alt=""/></van-swipe-item>
      </van-swipe>
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
<style lang="scss" scoped>
.lun {
  .my-swipe .van-swipe-item {
    color: #fff;
    font-size: 20px;
    text-align: center;
  }
  img {
    width: 100%;
    height: 100%;
  }
}
</style>
