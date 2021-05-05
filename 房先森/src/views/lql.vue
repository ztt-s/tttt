<template>
  <div id="quanju">
    <div id="top"></div>
    <div id="songsuo">
      <ul>
        <li>
          户型
          <i class="iconfont icon-down"></i>
        </li>
        <li>
          区域
          <i class="iconfont icon-down"></i>
        </li>
        <li>
          风格
          <i class="iconfont icon-down"></i>
        </li>
        <li>
          <i class="iconfont icon-search lll"></i>
        </li>
      </ul>
    </div>
    <div id="tupian">
      <div>
        <img src="..\assets\image\切图\banner2.jpg" alt="">
        <p>
          欧美文化的抽象美感
        </p>
        <p>
          混搭 1000
        </p>
      </div>
      <div>
        <img src="..\assets\image\切图\banner2.jpg" alt="">
        <p>
          欧美文化的抽象美感
        </p>
        <p>
          混搭 1000
        </p>
      </div>
      <div>
        <img src="..\assets\image\切图\banner2.jpg" alt="">
        <p>
          欧美文化的抽象美感
        </p>
        <p>
          混搭 1000
        </p>
      </div>
      <div>
        <img src="..\assets\image\切图\banner2.jpg" alt="">
        <p>
          欧美文化的抽象美感
        </p>
        <p>
          混搭 1000
        </p>
      </div>

      <div>
        <img src="..\assets\image\切图\banner2.jpg" alt="">
        <p>
          欧美文化的抽象美感
        </p>
        <p>
          混搭 1000
        </p>
      </div>
      <div>
        <img src="..\assets\image\切图\banner2.jpg" alt="">
        <p>
          欧美文化的抽象美感
        </p>
        <p>
          混搭 1000
        </p>
      </div>
      <div>
        <img src="..\assets\image\切图\banner2.jpg" alt="">
        <p>
          欧美文化的抽象美感
        </p>
        <p>
          混搭 1000
        </p>
      </div><div>
        <img src="..\assets\image\切图\banner2.jpg" alt="">
        <p>
          欧美文化的抽象美感
        </p>
        <p>
          混搭 1000
        </p>
      </div>
    </div>
    <div id="xiayiye">
      <ul>
        <li class="lv">
          上一页
        </li>
        <li>
          2/30
        </li>
        <li class="lv">
          下一页
        </li>
      </ul>
    </div>
    <div id="fxs">
      房先森互联网家装有别于传统装修公司与其他装修中介平台，以自营模式整合设计师与项目经理，杜绝项目转包外包，利用互联网将工地进行在线全景直播,通过去中间环节，提供装修套餐＋个性化定制服务。
    </div>
    <div id="dianhua"> 
      <p>
        <i class="iconfont icon-hot-line lll"></i>
        服务热线：400-9977-658
      </p>
      <ul>
        <li>
          触屏版
        </li>
        <li>
          电脑版
        </li>
        <li>
          关于我们
        </li>
        <li>
          联系我们
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

<style lang="scss">
#quanju {
  width: 100%;
  height: 100%;
  background: #eee;
}
#top {
  width: 100%;
  height: 0.5rem;
  line-height: 0.5rem;
  
}
#songsuo {
  width: 100%;
  height: 0.5rem;
  font-size: 0.3rem;
  background: #fff;
  
  li {
    float: left;
    width: 24%;
    
  }
}
#tupian {
  width: 100%;
  height: 20rem;
  font-size: 0.15rem;
  background: #eee;
  div {
    margin: 0.5%;
    margin-top: 2%;
    width: 49%;
    height: 3rem;
    background: #fff;
    float: left;
    align-items: center;
    text-align: center;
    img {
      width: 100%;
      height: 2rem;
    }
  }
}
#xiayiye {
  margin-top: 1rem;
  width: 100%;
  height: 1rem;
  font-size: 0.5rem;
  background: #fff;
  line-height: 1rem;
  li {
    float: left;
    width: 33%;
    height: 100%;
  }
  .lv {
    background: seagreen;
  }
}
#fxs {
  margin-top: 0.5rem;
  width: 100%;
  height: 3rem;
  font-size: 0.38rem;
  background: #fff;
}
.lll{
  font-size: 0.4rem;
  color: #39c894;
}
#dianhua{
  width: 100%;
  height: 3rem;
  margin-top:  1rem; ;
  background: #fff;
  p{
    width: 100%;
    height: 0.5rem;
    font-size: 0.2rem;
  }
  li{
    float: left;
    font-size: 0.2rem;
    width: 25%;
  }
}
</style>
