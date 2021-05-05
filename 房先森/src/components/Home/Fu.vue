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
      <div class="t3">
          <div class="q1"><span>X</span> </div>
          <div class="q2">
              <img src="/切图/quoten_bottom.png" alt="">
 
          </div>
          <div class="q3">
              <button>免费获取报价</button>
          </div> 

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
   background: rgb(244,244,244);
    display: flex;
}
.gray{
    background: #999999;
    margin-top: 10px;
    margin: 10px 0 10px 0;
    height: 100px;
}
.t1 {
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
.t3{
    font-size: 16px;
    display: flex;
    
}
.q1{
    width: 5%;
    span{
        background: rgb(26, 172, 62);
    }
}
.q2{
    width: 60%;
    position: relative;
    img{
        width: 100%;
    }
 
}
.q3{
    width: 35%;
    text-align: center;
   
    button{
        width: 120px;
        height: 40px;
        background: #feb505;
        border: none;
        border-radius: 30px;
        margin-top: 10px;
    }
}


</style>
