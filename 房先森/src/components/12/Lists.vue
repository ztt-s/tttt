<template>
  <div class="box">
    <div class="gray">
      <p class="pp">
        <span class="w">设计作品</span><span class="n">设计收费50-100元/m</span>
      </p>
      <ul>
        <li>
          <img src="/2.png" alt="" />
          <h3>欧美文化抽象美感</h3>
          <span>混搭</span><span>三室</span><span>1100元/m</span>
        </li>
        <li>
          <img src="/2.png" alt="" />
          <h3>欧美文化抽象美感</h3>
          <span>混搭</span><span>三室</span><span>1100元/m</span>
        </li>
        <li>
          <img src="/2.png" alt="" />
          <h3>欧美文化抽象美感</h3>
          <span>混搭</span><span>三室</span><span>1100元/m</span>
        </li>
        <li>
          <img src="/2.png" alt="" />
          <h3>欧美文化抽象美感</h3>
          <span>混搭</span><span>三室</span><span>1100元/m</span>
        </li>
        <li>
          <img src="/2.png" alt="" />
          <h3>欧美文化抽象美感</h3>
          <span>混搭</span><span>三室</span><span>1100元/m</span>
        </li>
        <li>
          <img src="/2.png" alt="" />
          <h3>欧美文化抽象美感</h3>
          <span>混搭</span><span>三室</span><span>1100元/m</span>
        </li>
        <li>
          <img src="/2.png" alt="" />
          <h3>欧美文化抽象美感</h3>
          <span>混搭</span><span>三室</span><span>1100元/m</span>
        </li>
      </ul>
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
.box {
  font-size: 16px;
  background: rgb(244,244,244);
}
.w {
  font-size: 30px;
}
.n {
  margin-left: 135px;
  color: gray;
}
.pp {
  height: 60px;
  line-height: 60px;
  border-left: 3px solid lawngreen;
//   background: white;
  margin-top: 10px;
}
ul{
    text-align: center;
    display: flex;
    flex-wrap: wrap;
    li{
        width: 48%;
        border: 1px solid gray;
        margin-left: 1px;
        margin-top: 1px;
        img{
            width: 95%;
        }
    }
}
span{
    color: gray;
    margin-left: 5px;
}
</style>
