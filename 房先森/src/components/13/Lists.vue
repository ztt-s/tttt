<template>
    <div class="box">
        <div class="gray">
            <div class="n">
                <img src="/切图/case/case.jpg" alt="">
            </div>
            <div class="top">
            <div class="w">
                <div class="x">399元/m半包装套餐</div>
                <div class="x1"><span class="a">特惠：</span><span class="s">可选300元/m品牌主材包</span></div>
            </div>
            <div class="b">
                <button>已预约295套</button>
                <div class="j">局部装修</div>
            </div>
            </div>
             <div class="n">
                <img src="/切图/case/case.jpg" alt="">
            </div>
            <div class="top">
            <div class="w">
                <div class="x">699元/m全包装套餐</div>
                <div class="x1"><span class="a">特惠：</span><span class="s">全包套装火热预约中</span></div>
            </div>
            <div class="b">
                <button class="t">已预约221套</button>
                <div class="j1">全屋套餐</div>
            </div>
            </div>
        </div>
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
.box{
    text-align: center;
    margin: 10px;
    font-size: 16px;
    position: relative;
}

img{
    width: 95%;
}
.top{
    display: flex;
}
.x{
    font-size: 20px;
}
.a{
    color: gray;
}
.s{
    color: red;
}
.x1{
    margin-left: 5px;
}
button{
    background: rgb(255, 68, 80);
    width: 100px;
    height: 40px;
    border: none;
    border-radius:30px 0 0 30px;
    margin-left: 59px;
    margin-top: 16px;
}
.w{
    margin-top: 15px;
}
.j{
    background: palegreen;
    width: 100px;
    height: 40px;
    line-height: 40px;
    color: #fff;
    position: absolute;
    left: 5px;
    top: 10px;
}
.j1{
    background: palegreen;
    width: 100px;
    height: 40px;
    color: #fff;
    line-height: 40px;

    position: absolute;
    left: 5px;
    top: 223px;
}
.t{
    background: rgb(255, 68, 80);
    width: 100px;
    height: 40px;
    border: none;
    border-radius:30px 0 0 30px;
    margin-left: 85px;
    margin-top: 16px;
}
.n{
    margin-top: 10px;
}
</style>
