<template>
  <div>
    <div class="nan2">
      <div class="gray">
        <h6>设计师</h6>
        <div class="d1">
          <div>
            <img src="/6.png" alt="" />
            <p>吴飞可</p>
            <span>总监</span>
          </div>
          <div>
            <img src="/6.png" alt="" />
            <p>吴飞可</p>
            <span>总监</span>
          </div>
          <div>
            <img src="/6.png" alt="" />
            <p>吴飞可</p>
            <span>总监</span>
          </div>
          <div>
            <img src="/6.png" alt="" />
            <p>吴飞可</p>
            <span>总监</span>
          </div>
        </div>
        <div class="d2">
          <div>换一批 <i class="iconfont icon-change"></i></div>
          <div>更多设计师 <i class="iconfont icon-more"></i> </div>
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

.nan2 {
  background: rgb(199, 195, 195);
  //   height: 400px;
  display: flex;
  .gray {
    margin-top: 10px;
    h6{
      background: white;
      height: 60px;
      line-height: 60px;
      b {
        font-size: 10px;
      }
    }
    .d1 {
      width: 100%;
      display: flex;
      text-align: center;
      div {
        width: 25%;
        background: white;
        font-size: 16px;
        img {
          width: 80%;
        }
        p {
          width: 100%;
          background: white;
          font-size: 16px;
        }
        span {
          width: 10px;
          background: rgb(26, 172, 62);
          font-size: 16px;
      
        }
      }
    }
    .d2 {
      display: flex;
      height: 60px;
      justify-content: center;
      align-items: center;
      background: white;
      div {
        width: 40%;
        height: 50px;
        line-height: 50px;
        border: 1px solid gray;
        color: rgb(26, 172, 62);
        text-align: center;
        font-size: 16px;
      }
    }
  }
}</style>
