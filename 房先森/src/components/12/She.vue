<template>
    <div class="box">
        <div class="top">
            <div><img src="/6.png" alt=""></div>
            <div>
                <p> <span class="n">陈冲</span> <span>优秀</span></p>
                <p> <span class="t">作品：</span><span class="w">8个</span> <span class="t">经验：</span><span class="w">5年</span></p>
                <p><span class="t">擅长风格：</span><span class="w">现代/美式/简约/新古典</span></p>
                <p><span class="t">设计理念：</span><span class="w">在满足使用功能的前提下达到审美功能的最大化</span></p>
                <div class="p">
                    <div>
                      <div class="h">  <i class="iconfont icon-thumb-up"></i></div>
                    <p class="i">人气(618)</p>
                    </div>
                    <div>
                      <div class="h1">  <i class="iconfont icon-pencle"></i></div>
                    <p class="o">评价(10)</p>
                    </div>
                     <div>
                      <div class="h2">  <i class="iconfont icon-design"></i></div>
                    <p class="s">找我设计</p>
                    </div>
                </div>
            </div>
        </div>
        <p class="d"><span>个人简历：</span><span class="w">毕业于中国美术学院，从事家装行业3年积累了一定的经验。具有良好的审美能力
            以及独立完成项目方案设计的能力。工作期间曾完成多个室内精装修项目，熟悉室内装修施工工艺及材料的运用。
            切合实际生活的设计，营造舒适的私人环境。
            </span></p>
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
    font-size: 16px;
    margin: 10px;
}
.top{
    display: flex;
    margin-top: 15px;
    height: 330px;
}
.w{
    color: gray;
}
.n{
    font-size: 20px;
}
p{
    height: 35px;
    line-height: 35px;
}
.t{
    font-size: 18px;
}
.icon-thumb-up{
    color: rgb(253, 138, 99);
    font-size: 60px;
 
}
.h{
    width: 80px;
    height: 80px;
    border: 1px solid rgb(253, 138, 99);
    border-radius: 50%;
    text-align: center;
    margin-left: 25px;
    line-height: 80px;
    
}
.h1{
    width: 80px;
    height: 80px;
    border: 1px solid  rgb(32, 158, 246);
    border-radius: 50%;
    text-align: center;
    margin-left: 25px;
    line-height: 80px;
    
}
.i{
    color: rgb(253, 138, 99);
    margin-left: 29px;
}
.o{
    color: rgb(32, 158, 246);
    margin-left: 29px;
}
.p{
    display: flex;
    margin-top: 70px;
    margin-left: -70px;
    
}
.icon-pencle{
    color: rgb(32, 158, 246);
 font-size: 60px;
}
.icon-design{
    color: rgb(254, 77, 89);
 font-size: 60px;
}
.h2{
    width: 80px;
    height: 80px;
    border: 1px solid  rgb(254, 77, 89);
    border-radius: 50%;
    text-align: center;
    margin-left: 25px;
    line-height: 80px;
    
}
.s{
    color: rgb(254, 77, 89);
    margin-left: 29px;
}
.d{
    margin-top: 25px;
    height: 150px;
}
</style>
