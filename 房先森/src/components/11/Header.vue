<template>
  <div>
    <div class="top">
      <div class="to1">
        <img src="/logo.png" alt="" />
      </div>
      <div class="to4">
          工地直播
      </div>
      <div class="to2">
        <i class="iconfont icon-user"></i>
        <p>我的</p>
      </div>
      <div class="to3">
        <i class="iconfont icon-nav"></i>
        <p>导航</p>
      </div>
    </div>
  </div>
</template>
<script>
import "@/assets/iconfont/iconfont.css";
export default {
  data() {
    return {};
  },
  mounted() {},
  methods: {},
};
</script>
<style lang="scss" scoped>
*{
    margin: 0;
    padding: 0;
}
.top {
  height: 77px;
  display: flex;
  border-bottom:1px solid gray ;
}
.to1 {
  width: 50%;
}
img {
  margin-top: 16px;
  margin-left: 18px;
  width: 130px;
}
.to3 {

  text-align: center;
  margin-top: -14px;
height: 77px;
  width: 100px;

}
.to2 {

  text-align: center;
  margin-top: -14px;
  width: 100px;
  height: 45px;
}
p {
  font-size: 16px;
}
.icon-user{
    font-size: 20px;
}
.icon-nav{
     font-size: 20px;
}
.to4{
    width: 30%;
    font-size: 20px;
    text-align: center;
    height: 77px;
    line-height: 77px;
}
</style>
