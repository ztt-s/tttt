<template>
  <div>
    <div>
      <img src="../assets/image/切图/case/case.jpg" class="img" alt="" />
    </div>

    <div class="room_top">
      <h5>房先森简介</h5>
    </div>
    <hr />

    <div class="room_zhong">
      <p>
        房先森互联网家装有别于传统装修公司与其他装修中，于2015年成立上线，方先森立足
        刚需房，专注于家庭装修服务，利用互联网将长相、供应链、金融进行融合，多维度实现
        用户对设计师、工长、工地、材料等的线上选择体验，方先森以自营的模式真正意义上过滤掉
        传统家装公司利润，将利润认给业主。房先森与银行合作的专项装修贷款能够解决业主装修资金问题
        并以装修套餐+个性化定制的模式，提供创新型装修服务。
      </p>
    </div>

    <div>
      <img src="../assets/image/切图/2.png" class="img1" alt="" />
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
      <img src="../assets/image/切图/02.png" class="img2" alt="" />
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
.room_top {
  width: 100%;
  height: 1rem;
  h5 {
    font-size: 0.4rem;
    margin-left: 3rem;
  }
}
.room_zhong {
  width: 100%;
  height: 2.7rem;
  margin-top: 0.2rem;
  p {
    text-indent: 1rem;
  }
}
.img1 {
  width: 100%;
  height: 12rem;
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

.img2 {
  width: 100%;
  height: 0.4rem;
}
</style>