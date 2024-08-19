<template>
  <div id="app">
    <NavComp />
    <router-view/>
    <section class="home-sec"></section>
  </div>
</template>

<script>
import NavComp from './components/NavComp.vue'

export default {
  components: {
    NavComp
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
}
</style>
