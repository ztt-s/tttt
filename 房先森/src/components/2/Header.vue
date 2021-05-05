<template>
  <div class="box">
    <div class="gray">
      <div class="p1"><img class="i1" src="/04.png" alt="" /></div>
      <div class="p2">
        <img class="i" src="/切图/关注.png" alt="" />
        <p class="p3">
          关注房先森官方微信公众号<span class="p4">sirfang_com</span>
        </p>
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
* {
  margin: 0;
  padding: 0;
}
.box {
  font-size: 16px;
}
.gray {
  width: 100%;
  background: rgb(57, 200, 147);
  height: 130px;
  display: flex;
  justify-content: space-around;
}
.p1 {
  width: 20%;
  margin-left: 28px;
  margin-top: 9px;
}
.p2 {
  width: 80%;
  margin-left: 46px;
  margin-top: 30px; 
}
.p3 {
  font-size: 15px;
  background: rgba(111 ,111 ,111,0.3 );
}
.p4 {
  color: greenyellow;
}
.i1 {
  width: 150%;
  margin-top: 10px;
}
.i {
  width: 80%;
  margin-top: 25px;
}
</style>
