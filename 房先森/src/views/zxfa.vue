<template>
    <div class=''>
        <div id="top">

        </div>
        <div id="top2">
            <div>
                
                <ul>
                    <li>
                        <img src="..\assets\image\切图\case\case.jpg" alt="">
                       
                    </li>
                    <li>

                    
                         <h1>
                            699全包精装套餐
                        </h1>
                    
                        <p>
                            <span>
                            价格：
                        </span>
                        <span class="red">
                            ￥699元/m
                        </span>
                        </p>
                        
                    
                        <p>
                            <span>
                            已预约：
                        </span>
                        221套餐
                        </p>
                    
                        <p>
                            <span>
                            正式发售：
                        </span>
                        <span class="red">
                            全包套餐火爆预约中
                        </span>
                        </p>
                    </li>
                </ul>
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

<style lang='scss'>
    #top2{
        width: 100%;
        height: 3rem;
        
        
        div{
            li{
                width: 50%;
                height: 1.5rem;
               float: left; 
               text-align: left;
            }
            img{
                width: 95%;
                height: 1.5rem;
            }
            span{
                color: #eee;

            }
            .red{
                color: red;
            }
        }
    }
</style>
