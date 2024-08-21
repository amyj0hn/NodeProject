<template>
  <div id="app">
    <NavComp />
    <router-view/>
    <FooterComp/>
  </div>
</template>

<script>
import FooterComp from './components/FooterComp.vue';
import NavComp from './components/NavComp.vue'

export default {
  components: {
    NavComp,
    FooterComp
  }
}
</script>

<style>
#app {
  font-family: "Times New Roman", Times, serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #fef5ec;
}


</style>
