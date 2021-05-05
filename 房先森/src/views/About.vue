<template>
  <div class="box">
    <img src="../assets/image/切图/process/process1.jpg" alt="" class="img" />
    <img src="../assets/image/切图/process/process2.jpg" alt="" />
    <img src="../assets/image/切图/process/process3.png" alt="" />
    <img src="../assets/image/切图/process/process4.jpg" alt="" />

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

      <div class="about">
        <img
          src="../assets/image/切图/common/icon_close.png"
          class="aboyt_img"
          alt=""
        />
        <i
          ><img
            src="../assets/image/切图/quoten_bottom.png"
            class="about_zhong"
            alt=""
          />
        </i>

        <button>免费获取标价</button>
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
.img {
  width: 100%;
  height: 4rem;
}
img {
  width: 100%;
  height: 10rem;
  margin-top: -0.5rem;
}
.home {
  width: 100%;
  height: 1.5rem;
  p {
    font-size: 0.3rem;
    text-indent: 0.8rem;
  }
}
.homr_xia {
  width: 100%;
  height: 3rem;
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
}

li:nth-child(1) {
  color: #98e0c2;
}
// li:hover{
//     color: #98e0c2;
// }

.about {
  width: 100%;
  height: 2rem;
  background-color: #2e2e2e;
  .aboyt_img {
    width: 0.5rem;
    height: 0.5rem;
    position: relative;
    top: -0.01rem;
  }
  .about_zhong {
    width: 4rem;
    height: 1rem;
    position: relative;
    top: 0.6rem;
    left: 0.3rem;
  }
  button {
    width: 2.3rem;
    height: 0.5rem;
    color: #fff;
    background-color: #feb605;
    border: 1px solid #feb605;
    border-radius: 0.5rem;
    position: relative;
    top: -0.01rem;
    left: 0.5rem;
  }
}
</style>