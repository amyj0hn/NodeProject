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

<style src="@/assets/css/style.css">

</style>
