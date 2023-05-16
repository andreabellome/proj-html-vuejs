<script>
import axios from 'axios';
import { store } from './store';
import FooterComp from './components/FooterComp.vue';
import MainComp from './components/MainComp.vue';
import HeaderComp from './components/HeaderComp.vue';

export default {
  name: "App",
  components: {
    HeaderComp,
    MainComp,
    FooterComp
  },
  data() {
    return {
      store
    }
  }
}

</script>

<template>
  <HeaderComp :datiHeader="store.headerObj" :datiCarousel="store.carouselObj" :currActive="store.currActive" />
  <MainComp :datiFirstDiv="store.firstDivObj" />
  <FooterComp :datiFooter="store.footerObj" />
</template>

<style lang="scss">
@use "./style/main.scss" as *;
</style>
