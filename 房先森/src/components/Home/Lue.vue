<template>
    <div>
        <div class="gl">
            <div class="gray">
                <h6>装修攻略</h6>
                <div class="top">
                    <div class="t1"><img src="/3.png" alt=""></div>
                    <div class="t2">
                        <p>房子交付要验房，验房师是做什么的？</p>
                        <span><i class="iconfont icon-time"></i>2016-07-07</span>
                        <span><i class="iconfont icon-view"></i>115</span>
                    </div>
                </div>
                 <div class="top">
                    <div class="t1"><img src="/3.png" alt=""></div>
                    <div class="t2">
                        <p>能让您涨工资的家居风水！</p>
                        
                        <span><i class="iconfont icon-time"></i>2016-07-07</span>
                        <span><i class="iconfont icon-view"></i>115</span>
                    </div>
                </div>
                 <div class="top">
                    <div class="t1"><img src="/3.png" alt=""></div>
                    <div class="t2">
                        <p>遇到有这样房子的男人就嫁了吧</p>
                        <span><i class="iconfont icon-time"></i>2016-07-07</span>
                        <span><i class="iconfont icon-view"></i>115</span>
                    </div>
                </div>
                    <div class="d2">
          <div class="t">换一批 <i class="iconfont icon-change"></i></div>
          <div class="t">更多装修攻略 <i class="iconfont icon-more"></i></div>
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
.gl{
    background: gray;
    width: 100%;
    display: flex;
   
}
.gray{
    background: white;
}
h6{
    height: 60px;
    line-height: 60px;
    background: white;
    margin-top: 10px;
}
.top{
    display: flex;
    height: 120px;
}
p{
    font-size: 19px;
    height: 45px;
   
}
.t2{
    height: 102px; 
    background: white;
    width: 100%;
}
span{
    font-size: 16px;
    color: gray;
    margin-right: 35px;
    margin-bottom: 0px;
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
</style>
