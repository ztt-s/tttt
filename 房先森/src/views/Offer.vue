<template>
  <div>
    <div>
      <img src="../assets/image/切图/10quoted.jpg" class="img" alt="" />
    </div>

    <div class="offer">
      <h4>房先森10S报价</h4>
    </div>
    <hr />

    <div class="box">
      <input type="text" placeholder="情输入建设面积" name="" id="" /><br />
      <select name="" id="">
        <option value="现代"></option>
        <option value="吃饭"></option>
        <option value="睡觉"></option>
        <option value="打豆豆"></option>
      </select>
      <div>
        <select name="" id="">
          <option value="1室"></option>
          <option value="1位"></option>
        </select>
        <select name="" id="">
          <option value="1厅"></option>
          <option value="1跑道"></option>
        </select>
      </div>
      <div>
        <select name="" id="">
          <option value=""></option>
          <option value=""></option>
          <option value=""></option>
          <option value=""></option>
        </select>
        <select name="" id="">
          <option value=""></option>
          <option value=""></option>
          <option value=""></option>
          <option value=""></option>
        </select>
        <select name="" id="">
          <option value=""></option>
          <option value=""></option>
          <option value=""></option>
          <option value=""></option>
        </select>
      </div>
    </div>

    <div class="offer_top">
      <h5>装修报价</h5>
      <p class="a1">
        全包装修总价： <span style="color: #fe767d">81,889,78</span>
      </p>

      <span class="aq">您还可以选择</span>
      <p class="a2">
        房先森装修半包套餐价：<span style="color: #fdb807">399</span>元/平米
      </p>
      <button>预约399套餐</button>
    </div>

    <div class="offer_zhong">
      <h4>我们可以为您提供</h4>
      <hr />

      <ol>
        <li>
          <i class="icon iconfont icon-app"></i>
          <p>产品系列</p>
          <span>半包、全包套餐、全屋定制及个新华升级</span>
        </li>
        <li>
          <i class="icon iconfont icon-price"></i>
          <p>0元装修</p>
          <span>半包、全包套餐、全屋定制及个新华升级</span>
        </li>
        <li>
          <i class="icon iconfont icon-live"></i>
          <p>工地直播</p>
          <span>半包、全包套餐、全屋定制及个新华升级</span>
        </li>
        <li>
          <i class="icon iconfont icon-preferential"></i>
          <p>合作优惠</p>
          <span>半包、全包套餐、全屋定制及个新华升级</span>
        </li>
        <li>
          <i class="icon iconfont icon-construction-site"></i>
          <p>参观工地</p>
          <span>半包、全包套餐、全屋定制及个新华升级</span>
        </li>
        <li>
          <i class="icon iconfont icon-protection"></i>
          <p>售后保障</p>
          <span>半包、全包套餐、全屋定制及个新华升级</span>
        </li>
      </ol>
    </div>

    <div class="home">
      <p>
        房先森互联网家装有别于传统装修公司与其他装修中
        价平台，以自营模式整合设计师与项目经理，杜绝项目转
        包外包，利用互联网将工地进行在线全景直播，通过去中
        间环节，提供装修套餐+个性定制服务。
      </p>
    </div>

    <div class="homr_xia">
      <p>服务热线：400-9977-658</p>

      <ul>
        <li>触摸版</li>
        <li>电脑版</li>
        <li>关于我们</li>
        <li>联系我们</li>
      </ul>
      <span>2016 sirfang.com 刚需房装修找房先森</span>
      <img src="../assets/image/切图/02.png" class="img1" alt="" />
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
.img {
  width: 100%;
  height: 3rem;
}
.offer {
  width: 100%;
  height: 1rem;

  h4 {
    font-size: 0.5rem;
    margin-left: 2rem;
  }
}
.box {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
select {
  width: 50px;
}

.offer_top {
  width: 100%;
  border: 1px dashed #62d5ac;
  box-sizing: border-box;
  h5 {
    font-size: 0.4rem;
    margin-left: 3rem;
  }
  .a1 {
    font-size: 0.4rem;
    margin-left: 1.5rem;
  }
  .aq {
    font-size: 0.4rem;
    margin: 0.4rem 2.5rem;
  }
  .a2 {
    font-size: 0.4rem;
    margin-left: 0.5rem;
  }
  button {
    width: 90%;
    height: 1rem;
    color: #62d5ac;
    border: 1px solid #62d5ac;
    font-size: 0.3rem;
    background-color: #fff;
    margin-left: 0.3rem;
  }
}

.offer_zhong {
  width: 100%;
  height: 4rem;
  h4 {
    font-size: 0.4rem;
    margin-left: 2rem;
  }
  ol {
    width: 100%;
    height: 3rem;

    li {
      width: 33%;
      height: 2rem;

      float: left;
      text-align: center;
      p,
      span {
        color: #1e1e1e;
      }
      .icon {
        width: 30%;
        height: 2rem;
        color: #fff;
        background-color: #39c893;
        font-size: 0.7rem;
        border-radius: 5rem;
      }
    }
  }
}

.home {
  width: 100%;
  height: 1.5rem;
  margin-top: 1rem;
  p {
    font-size: 0.3rem;
    text-indent: 0.8rem;
  }
}

.homr_xia {
  height: 1rem;
  margin-top: 0.5rem;
  p {
    width: 100%;
    height: 0.6rem;
    font-size: 0.3rem;
    text-align: center;
  }

  ul {
    width: 100%;
    height: 0.5rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-top: 0.1rem;
    li {
      font-size: 0.3rem;
    }
  }
  span {
    font-size: 0.2rem;
    color: #ccc;
    margin-left: 2rem;
  }
}

li:nth-child(1) {
  color: #98e0c2;
}
.img1 {
  width: 100%;
  height: 0.4rem;
}
</style>