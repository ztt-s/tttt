<template>
  <div class="box">
    <Header />
    <div class="sousuo">
      <input type="text" placeholder="请输入关键字" /><button>
        搜索
      </button>
    </div>
    <div class="lc">
      <div class="z">
        <div class="h">装修前</div>
        <div class="h">装修中</div>
        <div class="h">装修后</div>
      </div>
      <div class="n">
        <ul>
          <li>
            <i class="icon iconfont icon-house "></i>
            <p>收房验房</p>
          </li>
          <li>
            <i class="icon iconfont icon-budget"></i>
            <p>装修预算</p>
          </li>
          <li>
            <i class="icon iconfont  icon-taiji"></i>
            <p>装修风水</p>
          </li>
          <li>
            <i class="icon iconfont icon-designer"></i>
            <p>装修设计</p>
          </li>
        </ul>
        <div class="lj">了解装修流程</div>
      </div>
    </div>
    <Lue />
    <Chuan />
    <Fu />
  </div>
</template>

<script>
import Header from "../components/2/Header";
import Lue from "../components/2/Lue";
import Chuan from "../components/15/Chuan";
import Fu from "../components/15/Fu";
export default {
  data() {
    return {};
  },
  mounted() {},
  methods: {},
  components: {
    Header,
    Lue,
    Chuan,
    Fu,
  },
};
</script>

<style lang="scss" scoped>
.box {
  font-size: 16px;
}
.sousuo {
  text-align: center;
  margin-top: 2px;
}
input {
  width: 75%;
  height: 42px;
  border: 1px solid #39c893;
}
button {
  width: 17%;
  height: 42px;
  background: #39c893;
  border: 1px solid #39c893;
}
.z {
  display: flex;
  text-align: center;
  .h {
    width: 33.3%;
    font-size: 20px;
  }
}
.con-bricklayer {
  font-size: 20px;
}

.n {
  width: 100%;
  height: 2rem;

  ul {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    li {
      width: 25%;
      .icon {
        width: 20%;
        height: 1rem;
        // background-color: #39c893;
        border: 3px solid #39c893;
        border-radius: 1rem;
        color: #39c893;
        font-size: 1rem;
      }
    }
  }
}
.lj {
  width: 90%;
  border: 1px solid #39c893;
  height: 45px;
  margin-left: 5%;
  line-height: 45px;
  color: #39c893;
}
</style>
