<template>
  <div>
    <div class="list">
      <ul>
        <li>
          <div class="b5">
            <i class="iconfont icon-decorate"></i>
          </div>
          <p>装修攻略</p>
        </li>
        <li>
          <div class="b6">
            <i class="iconfont icon-bank"></i>
          </div>
          <p>装修贷款</p>
        </li>
        <li>
          <div class="b7">
            <i class="iconfont icon-pencle"></i>
          </div>
          <p>免费预约</p>
        </li>
        <li>
          <div class="b8">
            <i class="iconfont icon-ten"></i>
          </div>
          <p>十秒报价</p>
        </li>
        <li>
          <div class="b1">
            <i class="iconfont icon-case"></i>
          </div>
          <p>装修方案</p>
        </li>
        <li>
          <div class="b2">
            <i class="iconfont icon-pics"></i>
          </div>
          <p>效果图</p>
        </li>
        <li>
          <div class="b3">
            <i class="iconfont icon-designer"></i>
          </div>
          <p>设计师</p>
        </li>
        <li>
          <div class="b4">
            <i class="iconfont icon-construction-site"></i>
          </div>
          <p>装修工地</p>
        </li>
      </ul>
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
.list {
  width: 100%;
}
ul {
  width: 100%;
  display: flex;
  flex-wrap: wrap-reverse;
  text-align: center;
}
li {
  width: 25%;
  margin: 20px 0;
}
img {
  width: 100%;
}
p {
  font-size: 16px;
}
.icon-case {
  font-size: 50px;

  color: #fff;
}
.b1 {
  width: 70%;

  background: #39c894;
  border-radius: 50%;
  margin-left: 10px;
}
.icon-pics {
  font-size: 50px;

  color: #fff;
}
.icon-designer {
  font-size: 50px;
  color: #fff;
}
.icon-construction-site {
  font-size: 50px;
  color: #fff;
}
.icon-decorate {
  font-size: 50px;
  color: #fff;
}
.icon-bank{
      font-size: 50px;
  color: #fff;
}
.icon-pencle{
    font-size: 50px;
  color: #fff;
}
.icon-ten{
      font-size: 50px;
  color: #fff;
}
.b2 {
  width: 70%;

  background: #feb505;
  border-radius: 50%;
  margin-left: 10px;
}
.b3 {
  width: 70%;

  background: #eed215;
  border-radius: 50%;
  margin-left: 10px;
}
.b4 {
  width: 70%;

  background: #00b2b2;
  border-radius: 50%;
  margin-left: 10px;
}
.b5 {
  width: 70%;

  background: #1b9af7;
  border-radius: 50%;
  margin-left: 10px;
}
.b6 {
  width: 70%;

  background: #7b72e9;
  border-radius: 50%;
  margin-left: 10px;
}
.b7 {
  width: 70%;

  background: #ff4351;
  border-radius: 50%;
  margin-left: 10px;
}
.b8 {
  width: 70%;
  background: #fe8864;
  border-radius: 50%;
  margin-left: 10px;
}
</style>
