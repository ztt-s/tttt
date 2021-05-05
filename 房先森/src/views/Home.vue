<template>
  <div>
    <Header/>
    <Swiper/>
    <Lists/>
    <Xing1/>
    <Zhuang/>
    <She/>
    <Xiao/>
    <Gong/>
    <Lue/>
    <Chuan/>
    <Fu/>
    <!-- <my-swiper :list="list" autoplay></my-swiper> -->
  </div>
</template>

<script>
import Header from "../components/Home/Header"
import Swiper from '../components/Home/Swiper'
import Lists from '../components/Home/Lists'
import Xing1 from '../components/Home/Xing1'
import Zhuang from '../components/Home/Zhuang'
import She from '../components/Home/She'
import Xiao from '../components/Home/Xiao'
import Gong from '../components/Home/Gong'
import Lue from '../components/Home/Lue'
import Chuan from '../components/Home/Chuan'
import Fu from '../components/Home/Fu'

export default {
  data() {
    return {
 
    };
  },
  mounted() {

  },
  components: {
    Swiper,
    Header,
    Lists,
    Xing1,
    Zhuang,
    She,
    Xiao,
    Gong,
    Lue,
    Chuan,
    Fu
  },
};
</script>