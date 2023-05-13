<script>
import axios from 'axios';
import { store } from './store';
import Component from './components/Component.vue';

export default {
  name: "App",
  components: {
    Component
  },
  data() {
    return {
      store
    }
  }
}

</script>

<template>
  <Component />
</template>

<style lang="scss">
@use "./style/main.scss" as *;
</style>
