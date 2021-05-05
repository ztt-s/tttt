<template>
  <div class="top">
    <div class="box">
      <div class="gray"></div>
      <button class="w">2016-07-11</button><button class="n">泥土</button
      ><button class="t">验收阶段</button>
    </div>
    <p>泥土工程验收成功</p>
    <ul>
      <li><img src="/4.png" alt="" /></li>
      <li><img src="/4.png" alt="" /></li>
      <li><img src="/4.png" alt="" /></li>
      <li><img src="/4.png" alt="" /></li>
      <li><img src="/4.png" alt="" /></li>
      <li><img src="/4.png" alt="" /></li>
    </ul>
        <div class="box">
      <div class="gray"></div>
      <button class="w">2016-04-27</button><button class="n">水电</button
      ><button class="t">验收阶段</button>
    </div>
    <p>水电工程验收成功</p>
    <ul>
      <li><img src="/5.png" alt="" /></li>
      <li><img src="/5.png" alt="" /></li>
      <li><img src="/5.png" alt="" /></li>
    </ul>
       <div class="box">
      <div class="gray"></div>
      <button class="w">2016-04-15</button><button class="n">水电</button
      ><button class="t1">施工阶段</button>
    </div>
    <p>水电施工现场直播</p>
    <ul>
      <li><img src="/1.png" alt="" class="u" /></li>
    </ul>
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
  display: flex;
  margin: 10px;
  
}
.top{
     background: rgb(244,244,244);
}
.gray {
  width: 35px;
  height: 35px;
  background: rgb(26, 172, 62);
  border-radius: 50%;
}
.w {
  margin-left: 45px;
  background: rgb(221, 214, 214);
}
button {
  border: none;
}
.n {
  background: rgb(26, 172, 62);
  width: 50px;
}
.t {
  margin-left: 10px;
  width: 120px;
  background: orange;
}
ul{
    display: flex;
   flex-wrap: wrap;
//    text-align: center;

}
li{
    // margin: 5px;
    margin-left: 9px;
}
p{
    margin-left: 10px;
    font-size: 16px;
}
.t1 {
  margin-left: 10px;
  width: 120px;
  background: gray;
}
ul{
    width: 100%;
}
.u{
    width: 160%;
}
</style>
