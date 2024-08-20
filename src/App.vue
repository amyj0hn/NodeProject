<template>
  <div id="app">
    <NavComp />
    <router-view/>
    <FooterComp/>
    <section id="home"></section>
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
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #F8E3E7;
}


</style>
