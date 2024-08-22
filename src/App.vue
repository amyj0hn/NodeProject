<template>
  <div id="app">
    <div v-if="isLoading" class="spinner-container">
      <Spinner :isLoading="isLoading"></Spinner>
    </div>
    <div v-else>
    <NavComp />
    <router-view/>
    <FooterComp/>
    </div>
  </div>
</template>

<script>
import FooterComp from './components/FooterComp.vue';
import NavComp from './components/NavComp.vue'
import Spinner from './components/SpinnerComp.vue'

export default {
  components: {
    NavComp,
    FooterComp,
    Spinner
  },
  data() {
    return {
      isLoading: true
    };
  },
  mounted() {
    // Simulate data loading with a timeout
    setTimeout(() => {
      this.isLoading = false;
    }, 3000); // Adjust the timeout duration as needed
  }
};
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
