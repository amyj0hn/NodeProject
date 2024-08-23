<template>
  <div class="about-us">
    <div v-if="isLoading" class="spinner-container">
      <Spinner :isLoading="isLoading"></Spinner>
    </div>
    <div v-else>
    <!-- Section 1: This Is Us -->
    <div class="section fade-in">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-md-8">
            <h1>This Is Us</h1>
            <p>
              We're big believers in the joy of handmade crafts and the magic of a well-crafted plushie.
              Step into our world of unique, handmade crochet dolls, crafted with love and care.
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- Section 2: Image & Text -->
    <div class="image-text-section fade-in">
      <div class="image-container">
        <div class="row">
          <div class="col-md-6">
            <img src="https://github.com/MasoodahGeorge/nodePics/blob/main/pexels-2375361-10768164.jpg?raw=true" alt="Crochet Plushies">
          </div>
        </div>
          </div>
          <div class="col-md-6">
            <div class="text-container">
              <h3>Handcrafted Wonders Just for You</h3>
              <p>
                Our crochet dolls are more than just toys—they're handcrafted wonders that bring a touch of
                joy and whimsy to every home. Each doll is carefully designed to be a lasting companion.
              </p>
              <router-link to="/products">
                <button class="btn btn-outline-dark me-2">Explore Our Collection</button>
              </router-link>
            </div>
          </div>
    </div>

    <!-- Section 3: Real Craftsmanship -->
    <div class="text-banner fade-in">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-md-8 text-center">
            <h3>Real Craftsmanship. Handmade with Love.</h3>
          </div>
        </div>
      </div>
    </div>

    <!-- Section 4: Image & Text -->
    <div class="image-text-section reverse fade-in">
      <div class="col-md-6">
      <div class="text-container">
        <div class="row">
            <h3>From Our Hearts to Your Home</h3>
            <p>
              Every stitch is a labor of love, and every doll is crafted with the utmost care. Our passion
              for crochet shines through in every detail, ensuring that your plushie is truly special.
            </p>
            <router-link to="/contact">
              <button class="btn btn-outline-dark me-2">Contact Us</button>
            </router-link>
          </div>
        </div>
      </div>
      <div class="col-md-6 image-container">
        <img src="https://github.com/MasoodahGeorge/nodePics/blob/main/pexels-castorlystock-3945634.jpg?raw=true" alt="Crochet Crafting">
      </div>
    </div>
  </div>
</div>
</template>

<script>
import Spinner from '../components/SpinnerComp.vue';
export default {
  name: "AboutView",
  components: {
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

<style scoped>
.about-us {
  margin-top: 60px;
  text-align: center;
  font-family: 'Times New Roman', Times, serif;
}

.section {
  padding: 2rem 0;
}

.section h1 {
  font-weight: bold;
  color: #3f3f3f;
}

.section p {
  font-size: 1.2rem;
  color: #6f6f6f;
  max-width: 40%;
  margin: 1rem auto;
}

.image-text-section {
  display: flex;
  align-items: center;
}

.reverse {
  flex-direction: row-reverse;
}

.image-container img {
  width: 100%;
  min-width: 50vw;
  height: 60vh;
  object-fit: cover;
}

.text-container {
  padding: 1rem;
  text-align: left;
  height: 60vh;
}

.text-container h3 {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 2rem;
  margin-bottom: 1rem;
  color: #3f3f3f;
}

.text-container p {
  font-size: 1.2rem;
  margin-bottom: 1rem;
  color: #6f6f6f;
}

.text-container button {
  background-color: #D2B48C;
  color: white;
  border: none;
  padding: 0.8rem 2rem;
  cursor: pointer;
  font-size: 1rem;
}

.text-banner {
  background-color: tan;
  padding: 3rem 1rem;
}

.text-banner h3 {
  color: #3f3f3f;
}

/* Animation styles */
.fade-in {
  opacity: 0;
  transform: translateY(20px);
  animation: fadeIn 1s ease-in forwards;
}

@keyframes fadeIn {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Media queries */
/* Add this to your existing CSS */
@media (max-width: 768px) {
  .image-text-section {
    flex-direction: column;
  }
  .image-text-section .image-container {
    margin-bottom: 20px;
  }
  .image-text-section .text-container {
    margin-top: 20px;
  }
  .image-text-section.reverse {
    flex-direction: column-reverse;
  }

  .image-text-section .image-container {
  width: 100%;
}

.image-text-section .image-container img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
}
</style>
