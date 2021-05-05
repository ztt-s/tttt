<template>
    <div>
        <p><span class="n">设计师：<span class="w">吴飞可</span></span> <span class="t">项目经理：<span class="a">王永龙</span></span></p>
    </div>
</template>
<script>
export default {
    data() {
        return {};
    },
    mounted() {},
    methods: {},
};
</script>
<style lang="scss" scoped>
div{
    background: rgb(244,244,244);
    height: 50px;
    line-height: 50px;
}
p{
    font-size: 16px;
}
.w{
    color: rgb(26, 172, 62);
    border-bottom:1px solid  rgb(26, 172, 62);
}
.n{
    margin-left: 10px;
}
.t{
    margin-left: 30px;
}
.a{
    color: gray;
}
</style>
