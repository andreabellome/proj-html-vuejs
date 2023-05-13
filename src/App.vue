<script>
import axios from 'axios';
import { store } from './store';
import FooterComp from './components/FooterComp.vue';

export default {
  name: "App",
  components: {
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
  <FooterComp :datiFooter="store.footerObj" />
</template>

<style lang="scss">
@use "./style/main.scss" as *;
</style>
