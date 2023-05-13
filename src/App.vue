<script>
import axios from 'axios';
import { store } from './store';
import FooterComp from './components/FooterComp.vue';
import HeaderComp from './components/HeaderComp.vue';

export default {
  name: "App",
  components: {
    HeaderComp,
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
  <HeaderComp :datiHeader="store.headerObj" />
  <FooterComp :datiFooter="store.footerObj" />
</template>

<style lang="scss">
@use "./style/main.scss" as *;
</style>
