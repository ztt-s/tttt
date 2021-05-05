<template>
  <div class="">
    <!-- <h1>设计师下拉页面</h1> -->
    <headers>设计师</headers>
    <br />

    <div id="top">
      <ul>
        <li>
          筛选
          <i class="iconfont icon-down"></i>
        </li>
        <li>
          风格
          <i class="iconfont icon-down"></i>
        </li>
        <li>
          排序
          <i class="iconfont icon-down"></i>
        </li>
        <li>
          <i class="iconfont icon-search"></i>
        </li>
      </ul>
    </div>

    <p>级别</p>

    <div class="center">
      <ul class="uu">
        <li>不限</li>
        <li>总监</li>
        <li>主任</li>
        <li>优秀</li>
      </ul>
    </div>
    <h5>
      收费
    </h5>
    <ul class="uu uus">
      <li>不限</li>
      <li>0-50元/m</li>
      <li>50-100元</li>
      <li>100-150元</li>
    </ul>
  </div>
</template>

<script>
import headers from "../components/Header.vue";
export default {
  // 注册
  components: {
    headers,
  },
  data() {
    return {};
  },
  mounted() {},
  methods: {},
};
</script>

<style lang="scss" scoped>
#top {
  width: 100%;
  overflow: hidden;
  height: 1.5rem;
  li {
    height: 1rem;
    text-align: center;
    line-height: 1rem;
    width: 24%;
    border: chartreuse 1px solid;
    float: left;
  }
}

p {
  float: left;
  font-size: 0.3rem;
  margin-left: 0.4rem;
}

.uu {
  width: 100%;
  margin-top: 0.5rem;
  li {
    float: left;
    width: 28%;
    margin-top: 0.3rem;
    height: 0.8rem;
    margin-left: 0.2rem;
    line-height: 0.8rem;
    text-align: center;
    border: green 1px solid;
  }
  li:hover {
    // border: green 1px solid;
  }
}
.icon-search {
  color: chartreuse;
}
.uus {
  margin-top: 2.5rem;
}

#sp {
  width: 100%;
  height: 0.6rem;
  line-height: 0.6rem;
}
</style>
