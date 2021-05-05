<template>
    
 <div class="xiao">
      <div class="gray">
        <h6>效果图</h6>
        <div class="b"><img src="/7.png" alt="" /></div>
        <div class="bb">
          <ul>
            <li><img src="/8.png" alt="" /></li>
            <li><img src="/9.png" alt="" /></li>
            <li><img src="/10.png" alt="" /></li>
            <li><img src="/11.png" alt="" /></li>
          </ul>
        </div>
        <div class="d2">
          <div class="t">换一批 <i class="iconfont icon-change"></i></div>
          <div class="t">更多效果图 <i class="iconfont icon-more"></i></div>
        </div>
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
.xiao {
  width: 100%;
 background: rgb(244,244,244);
    display: flex;
}
 .gray {
    background: white;
    margin-top: 10px;
   
  }
 .t {
        width: 40%;
        height: 50px;
        line-height: 50px;
        border: 1px solid gray;
        color: rgb(26, 172, 62);
        text-align: center;
        font-size: 16px;
      }
       h6 {
      width: 100%;
      background: white;
      height: 60px;
      line-height: 60px;
    }
    .b {
      width: 100%;
     
    }
     img {
        width: 100%;
      }
    .bb {
      width: 100%;
     
    }
    .d2{
         display: flex;
      height: 60px;
      justify-content: center;
      align-items: center;
      background: white;
      
    }
     ul {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        
      }
      li {
          width: 50%;
          text-align: center;
         
        }
         img {
            width: 99%;
          }
</style>
