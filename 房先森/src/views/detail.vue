<template>
  <div>
    

    <div class="box">
       <img src="/01.png" alt="" />
      <p class="green">卧室(1) 书房(1) 厨房(1) 卫生间(1)</p>
      <div class="txt">
        <p>设计诠释：less is more 不需要过多的装饰，</p>
        <p>简单的墙面背景与简洁的家具即可组成一个温</p>
        <p>暖的家</p>
      </div>
      <Chuan></Chuan>
      <div class="fuwu">
        服务热线：400-9977-658
         
      </div>
      <ul>
        <li>触摸板</li>
        <li>电脑版</li>
        <li>关于我们</li>
        <li>联系我们</li>
      </ul>
      <div class="di">
           预约免费设计
      </div>
    </div>
   
  </div>
</template>
<script>
import Chuan from "../components/15/Chuan"
export default {
  data() {
    return {
      list: [],
      id: this.$route.query.id,
    };
  },
  mounted() {},
  methods: {},
  created() {},
  components:{Chuan}
};
</script>
<style lang="scss" scoped>
.box {
  width: 100%;
  height: 8rem;
  background: #000000;
  font-size: 16px;
  // margin-top: 1.5rem;
}
.box img {
  width: 100%;
  // height: 2rem;
  line-height: 5rem;
  margin-top: 1rem;
}
.green {
  color: #39c894;
  margin-top: 0.2rem;
  text-align: center;
  font-size: 0.5rem;
}
.txt {
  text-align: center;
  color: #eaeaea;
  font-size: 0.3rem;
}
.fuwu{
  font-size: 16px;
  text-align: center;
}
ul{
  display: flex;
  // text-align: center;
  li{
    width: 25%;
    text-align: center;
  }
}
.di{
  height: 100px;
  background: rgb(254,106, 115);
  font-size: 30px;
  color: rgb(238, 229, 229);
  line-height: 100px;
  text-align: center;
}
</style>
