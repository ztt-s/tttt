<template>
    <div class="dd">
          <div class="xiang1">
      <div class="gray">
        <p><b> 全屋装修</b><span>包设计、包主材、包水电、包施工</span></p>
        <img src="/切图/img1.jpg" alt="" />
      </div>
    </div>
    <div class="xiang2">
          <div><i class="iconfont icon-zero"></i><b>0增项，标准施工</b></div>
      <div><i class="iconfont icon-zero"></i><b>0增项，标准施工</b></div>
      <div><i class="iconfont icon-zero"></i><b>0增项，标准施工</b></div>
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
.xiang1 {
  background: rgb(199, 195, 195);
  display: flex;
}
.gray {
    margin-top: 10px;
    background: #fff;
  }
   p {
      background: white;
      height: 60px;
      line-height: 60px;
   }
    b {
        font-size: 26px;
      }
      span {
        margin-left: 10px;
        font-size: 15px;
        color: gray;
      }
    
    img {
      width: 100%;
   
    }
    .xiang2{
        display: flex;
        justify-content: space-around;
        height: 100px;

    }
    .icon-zero{
        color: #39c894;
        font-size: 14px;
    }
    b{
        font-size: 14px;
    }
</style>
