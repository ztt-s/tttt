<template>
  <div class="box">
    <div class="gray">
      <div class="t1">
        <i class="iconfont icon-tel"></i><span>服务热线：400-9977-658</span>
      </div>
      <div class="t2">
        <div class="tttt">触摸屏</div>
        <div>电脑版</div>
        <div>关于我们</div>
        <div>联系我们</div>
      </div>
      <div class="n">
          <span>2016 siffang.com 刚虚放装修就找放先森</span>
      </div>
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
.box{
   background: #f4f4f4;
    display: flex;
    font-size: 16px;
}
.gray{
    background: #999999;
    width: 100%;
    margin-top: 10px;
    margin: 10px 0 10px 0;
}
.t1 {
    width: 100%;
  font-size: 18px;
  text-align: center;
  background: white;
}
.icon-tel {
  font-size: 18px;
  color: rgb(26, 172, 62);
  border-radius: 50%;
  border: 1px solid rgb(26, 172, 62);
}
.t2 {
  font-size: 18px;
  display: flex;
  justify-content: space-around;
  background: white;
}
.tttt{
    color: rgb(26, 172, 62);
}
.n{
    height: 60px;
    line-height: 60px;
    background: white;
    text-align: center;
    color: gray;
}
 





</style>
