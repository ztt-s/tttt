<template>
      
  <div class="">
    <div class="box">
      <div class="box-1">
        <img src="../assets/image/切图/23.png" alt="" class="ss" />
      </div>
      <div class="box-2">
        <p class="p1">699全包精装套餐</p>
        <p class="p2">价格:<a>￥699元/m²</a></p>
        <p class="p2">已预约:<b>221套</b></p>
        <p class="p2">正式发售:<a>全包套装火爆预约中</a></p>
      </div>
    </div>

    <div class="dv">
      <p class="cl">
        精装全包套餐,包设计/包主材/包施工/包监理。采用知名辅材、一线主材,工厂直供F2c模式
      </p>
    </div>

    <div class="tab">
      <ul class="ul">
        <li>套餐详情</li>
        <li>配置清单</li>
        <li>施工工艺</li>
        <li>服务流程</li>
      </ul>
    </div>

    <div class="bottom">
      <img src="../assets/image/切图/24.png" alt="" />
    </div>

    <div class="bott">
        房先森互联网家装有别于传统装修公司与其他装修中介平台，以自营模式
            整合设计师与项目经理，杜绝项目转包外包，利用互联网将工地进行在线
            全景直播，通过去中间环节，提供装修套餐+个性化定制服务。
    </div>

    <div class="homr_xia">
      <p>服务热线：400-9977-658</p>

      <ul>
        <li>触摸版</li>
        <li>电脑版</li>
        <li>关于我们</li>
        <li>联系我们</li>
      </ul>
      <span>2016 sirfang.com 刚需房装修找房先森</span>
      <img src="../assets/image/切图/02.png" class="img2" alt="" />
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

<style lang='scss' scoped>
.bott {
  padding-top: 20px;
  text-indent: 1rem;
  font-size: 16px;
}
* {
  box-sizing: border-box;
}
img {
  width: 100%;
}
.bottom {
  width: 100%;
}
.ul {
  width: 100%;
  height: 50px;
  display: flex;
}
.ul li {
  width: 25%;
  height: 30px;
  font-size: 16px;
  text-align: center;
  line-height: 30px;
  border-right: 1px solid #ccc;
}
.ul li:hover {
  border-bottom: 3px solid green;
}
.tab {
  width: 100%;
  height: 50px;
}
.cl {
  font-size: 15px;
}
b {
  color: #000;
  padding-left: 10px;
}
.p2 {
  font-size: 15px;
  color: #ccc;
}
a {
  color: #ff4361;
  font-weight: 700;
  padding-left: 7px;
}
.p1 {
  font-size: 25px;
  font-size: 25px;
}
.box-2 {
  width: 55%;
  height: 120px;
  margin-left: 5px;
}

.dv {
  width: 100%;
  height: 50px;
  margin-top: 10px;
  line-height: 22px;
}
.ss {
  width: 100%;
  height: 100%;
}
.box-1 {
  width: 45%;
  height: 120px;
}
.box {
  width: 100%;
  height: 120px;
  display: flex;
  margin-top: 10px;
}

.homr_xia {
  height: 1rem;
  margin-top: 0.5rem;
}
p {
  width: 100%;
  height: 0.6rem;
  font-size: 0.3rem;
  text-align: center;
}
ul {
  width: 100%;
  height: 0.5rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 0.1rem;
}
li {
  font-size: 0.3rem;
}
span {
  font-size: 0.2rem;
  color: #ccc;
  margin-left: 2rem;
}
</style>
