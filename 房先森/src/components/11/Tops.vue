<template>
    <div class="box">
        <p>观澜时代国际花园云邸5栋 <span class="a">泥木工程</span></p>
        
        <div class="top">
        <p class="w1">户型：<span class="n">二室</span></p>
        <p class="w">面积：<span class="n">60-90m</span></p>
        <p class="w">装修预算：<span class="n">18万</span></p>
        </div>
         <div class="top">
        <p class="w1">工地概况：<span class="n">百万平米超级大盘，占据钱塘江北岸最美的江湾和湿地</span></p>
    
        </div>
          <div class="d2">
          <div class="t1"><i class="iconfont icon-pencle
"></i>评论 (10)</div>
          <div class="t"><i class="iconfont icon-tag
">预约参观工地 </i></div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {};
    },
    mounted() {},
    methods: {},
};
</script>
<style lang="scss" scoped>
.box{
    font-size: 16px;
    margin: 10px;
}
.top{
    display: flex;
   margin-top: 10px;
}
.w{
        margin-left: 40px;
    font-size: 10px;
}
.w1{
        
    font-size: 10px;
}
.n{
    color: gray;
}
.a{
    background:  rgb(26, 172, 62);
}
 .d2{
         display: flex;
      height: 60px;
      justify-content: center;
      align-items: center;
      background: white;
     
    }
    .t{
        width: 40%;
        height: 50px;
        line-height: 50px;
        border: 1px solid gray;
        color: rgb(26, 172, 62);
        text-align: center;
        font-size: 16px;
      }
      .t1{
        width: 40%;
        height: 50px;
        line-height: 50px;
        border: 1px solid gray;
        color: #00b2b2;
        text-align: center;
        font-size: 16px;
      }
      .icon-pencle{
          color: #00b2b2;
      }
</style>
