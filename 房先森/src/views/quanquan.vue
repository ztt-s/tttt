<template>
  <div class="">
    <div id="top"></div>
    <div id="songsuo">
      <ul>
        <li>
          筛选
          <i class="iconfont icon-down"></i>
        </li>
        <li>
          阶段
          <i class="iconfont icon-down"></i>
        </li>
        <li>
          排序
          <i class="iconfont icon-down"></i>
        </li>
        <li>
          <i class="iconfont icon-search lll"></i>
        </li>
      </ul>
    </div>
    <div id="fangwu">
        <div>
            <ul>
                <li>
                    <img src="..\assets\image\切图\case\case1.jpg" alt="">
                </li>
                <li>
                    <p>
                        公寓24栋
                    </p>
                    
                    <p>
                        泥木工程<i class="iconfont icon-panorama"></i>
                    </p>
                    
                    <p>
                        三室 0-90m 20km
                    </p>
                </li>
            </ul>
            <ul>
                <li>
                    <img src="..\assets\image\切图\case\case1.jpg" alt="">
                </li>
                <li>
                    <p>
                        公寓24栋
                    </p>
                   
                    <p>
                        泥木工程<i class="iconfont icon-panorama"></i>
                    </p>
                    
                    <p>
                        三室 0-90m 20km
                    </p>
                </li>
            </ul>
            <ul>
                <li>
                    <img src="..\assets\image\切图\case\case1.jpg" alt="">
                </li>
                <li>
                    <p>
                        观澜时代国际花园云低5
                    </p>
                    
                    <p>
                        泥木工程   
                        <i class="iconfont icon-panorama"></i>
                    </p>
                    
                    <p>
                        三室 0-90m 20km
                    </p>
                </li>
            </ul>
            <ul>
                <li>
                    <img src="..\assets\image\切图\case\case1.jpg" alt="">
                </li>
                <li>
                    <p>
                        公寓24栋
                    </p>
                    
                    <p>
                        泥木工程<i class="iconfont icon-panorama"></i>
                    </p>
                    
                    <p>
                        三室 0-90m 20km
                    </p>
                </li>
            </ul>
            <ul>
                <li>
                    <img src="..\assets\image\切图\case\case1.jpg" alt="">
                </li>
                <li>
                    <p>
                        公寓24栋
                    </p>
                    
                    <p>
                        泥木工程<i class="iconfont icon-panorama"></i>
                    </p>
                    
                    <p>
                        三室 0-90m 20km
                    </p>
                </li>
            </ul>
            <ul>
                <li>
                    <img src="..\assets\image\切图\case\case1.jpg" alt="">
                </li>
                <li>
                    <p>
                        公寓24栋
                    </p>
                    
                    <p>
                        泥木工程<i class="iconfont icon-panorama"></i>
                    </p>
                    
                    <p>
                        三室 0-90m 20km
                    </p>
                </li>
            </ul>
            <ul>
                <li>
                    <img src="..\assets\image\切图\case\case1.jpg" alt="">
                </li>
                <li>
                    <p>
                        公寓24栋
                    </p>
                    
                    <p>
                        泥木工程<i class="iconfont icon-panorama"></i>
                    </p>
                  
                    <p>
                        三室 0-90m 20km
                    </p>
                </li>
            </ul>
            <ul>
                <li>
                    <img src="..\assets\image\切图\case\case1.jpg" alt="">
                </li>
                <li>
                    <p>
                        公寓24栋
                    </p>
                    
                    <p>
                        泥木工程<i class="iconfont icon-panorama"></i>
                    </p>
                  
                    <p>
                        三室 0-90m 20km
                    </p>
                </li>
            </ul>
            <ul>
                <li>
                    <img src="..\assets\image\切图\case\case1.jpg" alt="">
                </li>
                <li>
                    <p>
                        公寓24栋
                    </p>
                  
                    <p>
                        泥木工程<i class="iconfont icon-panorama"></i>
                    </p>
                  
                    <p>
                        三室 0-90m 20km
                    </p>
                </li>
            </ul>
        </div>
    </div>
    <div id="xiayiye">
      <ul>
        <li class="lv">
          上一页
        </li>
        <li>
          2/30
        </li>
        <li class="lv">
          下一页
        </li>
      </ul>
    </div>
    <div id="dianhua"> 
      <p>
        <i class="iconfont icon-hot-line lll"></i>
        服务热线：400-9977-658
      </p>
      <ul>
        <li>
          触屏版
        </li>
        <li>
          电脑版
        </li>
        <li>
          关于我们
        </li>
        <li>
          联系我们
        </li>
      </ul>
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

<style lang="scss">
#songsuo {
  width: 100%;
  height: 0.5rem;
  font-size: 0.3rem;
  background: #fff;
  
  li {
    float: left;
    width: 25%;
    
  }
}
.lll{
  font-size: 0.4rem;
  color: #39c894;
}
#fangwu{
    width: 100%;
    height: 20rem;
    li{
        width: 50%;
        height: 1.5rem;
        float:left ;
        
        
        img{
            width: 3.5rem;
        }
        p{
            text-align: left;
            
        }
    }

}
#xiayiye {
  margin-top: 1rem;
  width: 100%;
  height: 1rem;
  font-size: 0.5rem;
  background: #fff;
  line-height: 1rem;
  li {
    float: left;
    width: 33%;
    height: 100%;
  }
  .lv {
    background: seagreen;
  }
}
#dianhua{
  width: 100%;
  height: 3rem;
  margin-top:  1rem; ;
  background: #fff;
  p{
    width: 100%;
    height: 0.5rem;
    font-size: 0.2rem;
  }
  li{
    float: left;
    font-size: 0.2rem;
    width: 25%;
  }
}
</style>
