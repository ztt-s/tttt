<template>
  <div class="bo">
    <div class="top">
      <div class="to1">
        <img src="/切图/logo.png" alt="" />
      </div>
      <div class="to4">
          装修方案
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
       <div class="t1">
        <div  class="y1">
          <img src="02.png" alt="">
        </div>
        <div class="y2">
          <h2>699全包精装套餐</h2>
          <p><span class="n">价格：</span> <span class="w">￥699元/m</span></p>
          <p><span class="n">已预约：</span><span>221</span></p>
          <p><span class="n">正式发售：</span><span class="w">全包套餐火爆预约中</span></p>
        </div>
      </div>
      <div class="t2">
        精装全包套餐，包设计/包主材/包施工/包监理。采用知名辅材，一线主材，工厂直供F2C模式 
        </div>
        <ul>
          <li>套餐详情</li>
          <li>配置清单</li>
          <li>施工工艺</li>
          <li>服务流程</li>
        </ul>
        <img src="/03.png" alt="">
        <Chuan/>
        <div class="q1">服务热线：400-9977-658</div>
        <ol>
          <li>触屏版</li>
          <li>电脑版</li>
          <li>关于我们</li>
          <li>联系我们</li>
        </ol>
        <div class="l">
          马上免费预约
        </div>
  </div>
</template>

<script>
import Chuan from "../components/15/Chuan"
export default {
    data() {
        return {};
    },
    mounted() {},
    methods: {},
components:{
  Chuan
}
};
</script>

<style lang='scss' scoped>
*{
    margin: 0;
    padding: 0;
}
.bo{
  font-size: 16px;
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
  margin-top: 20px;
height: 77px;
  width: 100px;

}
.to2 {

  text-align: center;
  margin-top: 20px;
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
.t1{
  display: flex;

}
.y1{
  width: 40%;
}
.y2{
  width: 60%;
  margin-top: 10px;
}
.n{
  color: gray;
}
.w{
  color: red;
}
.t2{
  margin-left: 15px;
  margin: 15px;
  font-size: 15px;
}
ul{
  display: flex;
 font-size: 18px;
 text-align: center;
}
 li{
    width: 25%;
    
  }
  img{
    width: 90%;
  }
  .q1{
    text-align: center;
    margin-top: 20px;
  }
  ol{
    display: flex;
    text-align: center;
  }
  .l{
    height: 100px;
  background: rgb(254,106, 115);
  font-size: 30px;
  color: rgb(238, 229, 229);
  line-height: 100px;
  text-align: center;
  }
</style>

