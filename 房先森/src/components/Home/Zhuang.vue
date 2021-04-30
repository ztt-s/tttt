<template>
    <div>
  <div class="nan1">
      <div class="gray">
        <p><b> 装修预约</b><span>免费上门量房，设计方案满意为止</span></p>
        <p><input type="text" name="" id="" placeholder="小区名" /></p>

        <p><input type="text" name="" id="" placeholder="手机号" /></p>

        <p><input type="text" name="" id="" placeholder="建设面积" /></p>

        <p><button>立即申请</button></p>
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
.nan1 {
  background: rgb(199, 195, 195);
  display: flex;
  width: 100%;
  
}
.gray {
    width: 100%;
    margin-top: 10px; 
    font-size: 16px;
  }
  p {
      width: 100%;
      background: white;
      height: 60px;
      line-height: 60px;

     
    }
    img {
      width: 100%;
    }
     input {
        height: 27px;
        width: 70%;
        margin-left: 15%;
      }
      button {
        width: 70%;
        height: 40px;
        line-height: 40px;
        margin-left: 15%;
        background: yellow;
        border: none;
      }
      b {
        font-size: 26px;
      }
      span {
        margin-left: 10px;
        font-size: 15px;
        color: gray;
      }
</style>
