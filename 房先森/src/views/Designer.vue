<template>
  <div class="">
    <!-- <i class="iconfont icon-search"></i> -->

    <headers>设计师</headers>
    <!-- <h1>
      设计师页面
    </h1> -->

    <ul id="uu">
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
        搜索
        <i class="iconfont icon-down"></i>
      </li>
    </ul>

    <ul id="li">
      <li v-for="i in 4" :key="i">
        <div id="img"></div>
        <div id="reight">
          <span id="name">陈冲</span>
          <span id="green">优秀</span>
          <span> 人气</span>
          <p>
            擅长风格：现代/混搭/欧式/田园
          </p>
          <br />
        
          <br />
        </div>
      </li>
      <div id="bottoms">
        <span>上一页</span>
        <span>1/30</span>
        <span>下一页</span>
      </div>
    </ul>

    <div id="font">
      房先森互联网家装有别与传统公司与其他装修介平台，以自运营模式整合设计师与项目经理，杜绝项目转外包，利用互联网将工地进行在线全景直播，通过去中间环节，提供装修套餐+个性化定制
    </div>

    <div id="botts">
      <h1>
        服务热线：400-9977-658
      </h1>
      <ul id="uu-bottom">
        <li>触屏版</li>
        <li>电脑版</li>
        <li>关于我们</li>
        <li>联系我们</li>
      </ul>
    </div>
  </div>
</template>

<script>
import headers from "../components/Header.vue";
export default {
  // 注册组件
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
#uu {
  width: 100%;
  float: left;
  overflow: hidden;
  height: 1rem;
  line-height: 1rem;
  border: 1px solid springgreen;
  li {
    width: 25%;
    float: left;
  }
}
#li {
  margin-top: 1.4rem;
  width: 100%;
  height: 1.5rem;
  li {
    border: 1px salmon solid;
    height: 2rem;
    line-height: 2rem;
    overflow: hidden;

    #img {
      width: 1.3rem;
      margin-left: 0.3rem;
      margin-top: 15px;
      height: 1.3rem;
      border-radius: 1rem;
      background: salmon;
      float: left;
    }
    #reight {
      margin-top: -0.3rem;
      width: 5.5rem;
      float: left;
      // background: chartreuse;
      // background: royalblue;
      p{
        margin-top: -0.2rem;
      }
    }
  }
}

#bottom {
  width: 100%;
  margin-left: 0.2rem;
  // background: royalblue;
}
.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -webkit-text-stroke-width: 0.2px;
  -moz-osx-font-smoothing: grayscale;
}

#bottoms {
  width: 100%;
  height: 1rem;
  line-height: 1rem;
  margin-top: 0.3rem;
}
#bottoms {
  span {
    width: 31%;
    float: left;
  }
}

#bottoms > span:nth-child(1) {
  margin-left: 0.3rem;
  background-color: #eaeaea;
}

#bottoms > span:nth-child(3) {
  background: #39c893;
  color: white;
}

#font {
  border: 1px solid red;
  // overflow: hidden;
  margin-top: 7rem;
  height: 2rem;

  padding-top: 0.2rem;
  margin-bottom: 10px;
}
#botts {
  width: 100%;
  height: 2rem;
}

#uu-bottom {
  width: 100%;
  li {
    float: left;
    width: 25%;
    height: 0.5rem;
    line-height: 0.5rem;
  }
}

#green {
  margin-left: 0.4rem;
}
#name {
  margin-left: -3rem;
  // margin-top: -2rem;
}
</style>
