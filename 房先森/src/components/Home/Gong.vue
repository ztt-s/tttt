<template>
    <div>
         <div class="gd">
        <div class="gray">
            <h6>工地直播</h6>
            <div>
                <img src="/12.png" alt="">
            </div>
            <p><b>重汽嘉泽苑7栋</b> <span>泥木工程</span></p>
             <div class="d2">
          <div class="t">换一批 <i class="iconfont icon-change"></i></div>
          <div class="t">更多设计师 <i class="iconfont icon-more"></i></div>
        </div>
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
.gd{
    background: gray;
    width: 100%;
        display: flex;
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
        .gray{
        margin-top: 10px;
    }
      h6{
            background: white;
            height: 60px;
            line-height: 60px;
          
        }
        div {
            background: white;
            width: 100%;
           
        }
         img{
                width: 100%;
            }
        p{
            background: white;
            height: 50px;
            line-height: 50px;
            font-size: 17px;
           
        }
         span{
                background: rgb(52, 216, 107);
                color: white;
            }
         .d2{
         display: flex;
      height: 60px;
      justify-content: center;
      align-items: center;
      background: white;
     
    }
</style>
