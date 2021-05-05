<template>
  <div class="">
    <!-- <h1>
      评价页面
    </h1> -->
    <headers>评价页面</headers>

    <ul id="box">
      <li>
        <div id="imgs"></div>
        <span id="name">x*h</span>

        <span> 2016-05-19</span>

        <br />

        <div id="font">
          这篇文章很实用,正在装修，刚好可以用来参考一下。
        </div>
      </li>

      <li>
        <div id="imgs"></div>
        <span id="name">x*h</span>

        <span> 2016-05-19</span>

        <br />

        <div id="font">
          这篇文章很实用,正在装修，刚好可以用来参考一下。
        </div>
      </li>

      <li>
        <div id="imgs"></div>
        <span id="name">x*h</span>

        <span> 2016-05-19</span>

        <br />

        <div id="font">
          这篇文章很实用,正在装修，刚好可以用来参考一下。
        </div>
      </li>

      <li>
        <div id="imgs"></div>
        <span id="name">x*h</span>

        <span> 2016-05-19</span>

        <br />

        <div id="font">
          这篇文章很实用,正在装修，刚好可以用来参考一下。
        </div>
      </li>
    </ul>

    <div id="fen">
      <ul>
        <li>上一页</li>
        <li>2/30</li>
        <li>下一页</li>
      </ul>
    </div>

    <div id="fonts">
      房先森互联网家装有别与传统公司与其他装修介平台，以自运营模式整合设计师与项目经理，杜绝项目转外包，利用互联网将工地进行在线全景直播，通过去中间环节，提供装修套餐+个性化定制
    </div>
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
#box {
  width: 99%;
  height: 2.5rem;
  li {
    border: chocolate 1px solid;
    height: 2.5rem;
  }
  span {
    float: right;
    margin-top: 0.3rem;
    margin-right: 0.3rem;
  }
  #name {
    float: left;
    margin-top: 0.4rem;
    margin-left: 0.2rem;
  }
}
#imgs {
  margin-left: 0.3rem;
  margin-top: 0.3rem;
  width: 1rem;
  height: 1rem;
  border-radius: 50px;
  background: chartreuse;
}
#font {
  margin-top: 1rem;
}
#fen {
  width: 100%;
  margin-top: 9rem;
  li {
    width: 29%;
    float: left;
    text-align: center;
    line-height: 1rem;
    height: 1rem;
    margin-left: 0.25rem;
    background: lightcoral;
  }
}
#fonts {
  margin-top: 1rem;
  width: 100%;
  height: 2rem;
  border: 1px solid red;
}
</style>
