<template>

  <div class="home-sec">
    <div v-if="isLoading" class="spinner-container">
      <Spinner :isLoading="isLoading"></Spinner>
    </div>
    <div v-else>
    <!-- Text Section -->
    <div class="text-section fade-in">
      <h1>Welcome to Amigurumi!</h1>
      <p class="slogan">Where Every Loop Is a Little Piece of Joy!</p>
      <div class="button-group">
        <router-link to="/products" class="button-link">
          <button>Shop Now</button>
        </router-link>
        <router-link to="/about" class="button-link">
          <button>Learn More</button>
        </router-link>
      </div>
    </div>

    <!-- Service Section -->
    <div class="service-section fade-in">
      <div class="service-item">
        <img
          src="https://github.com/MasoodahGeorge/nodePics/blob/main/homeimg%20(1).png?raw=true"
          alt="Worldwide Delivery"
        />
        <p>Worldwide Delivery</p>
      </div>
      <div class="service-item">
        <img
          src="https://github.com/MasoodahGeorge/nodePics/blob/main/homeimg%20(2).png?raw=true"
          alt="100% Cash Back"
        />
        <p>100% Cash Back</p>
      </div>
      <div class="service-item">
        <img
          src="https://github.com/MasoodahGeorge/nodePics/blob/main/homeimg%20(3).png?raw=true"
          alt="Secure Payment"
        />
        <p>Secure Payment</p>
      </div>
    </div>

    <!-- Background Image with Overlaying Text -->
    <div class="background-section fade-in">
      <div class="overlay-text">
        <h2>The Timeless Appeal of Handcrafted Treasures</h2>
        <p>
          In a fast-paced world dominated by mass production, our Amigurumi pieces stand as a testament to the enduring value of handmade artistry. Each crochet creation tells a story of patience, skill, and love, transforming ordinary materials into extraordinary keepsakes. Whether it's a cuddly companion for a child or a charming decoration for your home, these handcrafted treasures are more than just items—they're heirlooms in the making, cherished for their individuality and the care infused into every stitch.
        </p>
      </div>
    </div>

    <!-- Info Section -->
    <div class="info-section fade-in">
      <h2>Find Your Next Cuddly Companion</h2>
      <br />
      <h4>Visit us at</h4>
      <div class="info-content">
        <div class="info-block">
          <h3>Our Studio</h3>
          <p>123 Yarn Loop Lane<br />Knittington, CA 94000</p>
        </div>
        <div class="divider"></div>
        <div class="info-block">
          <h3>Studio Hours</h3>
          <p>
            Mon - Fri: 10am - 5pm<br />
            Saturday: 11am - 3pm<br />
            Sunday: Closed
          </p>
        </div>
      </div>
    </div>

    <!-- Image Collage -->
    <div class="container-fluid fade-in">
      <div class="container-fullwidth">
        <div class="row no-gutters">
          <div class="col">
            <img
              src="https://github.com/MasoodahGeorge/nodePics/blob/main/botpics%20(3).jpg?raw=true"
              class="img-full"
              alt="Image 1"
            />
          </div>
          <div class="col">
            <img
              src="https://github.com/MasoodahGeorge/nodePics/blob/main/botpics%20(2).jpg?raw=true"
              class="img-full"
              alt="Image 2"
            />
          </div>
          <div class="col">
            <img
              src="https://github.com/MasoodahGeorge/nodePics/blob/main/botpics%20(1).jpg?raw=true"
              class="img-full"
              alt="Image 3"
            />
          </div>
          <div class="col">
            <img
              src="https://github.com/MasoodahGeorge/nodePics/blob/main/botpic(5).jpg?raw=true"
              class="img-full"
              alt="Image 4"
            />
          </div>
          <div class="col">
            <img
              src="https://github.com/MasoodahGeorge/nodePics/blob/main/botpics%20(4).jpg?raw=true"
              class="img-full"
              alt="Image 5"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
import Spinner from '../components/SpinnerComp.vue';

export default {
  name: "HomeView",
  components:{
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
/* HOME SECTION */
.home-sec {
  display: flex;
  flex-direction: column;
}

.text-section {
  background-image: url("https://github.com/MasoodahGeorge/nodePics/blob/main/home.jpg?raw=true");
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: #ffffff;
  min-height: 100vh;
  text-align: left;
  background-color: rgba(0, 0, 0, 0.5); /* Optional: Add a dark overlay */
  background-blend-mode: darken; /* Optional: Blend the overlay with the image */
}

.text-section h1 {
  font-size: 4rem;
  font-weight: bold;
  margin-left: 5rem;
}

.text-section .slogan {
  font-size: 1.5rem;
  color: #ffffff;
  margin-left: 5rem;
}

.text-section button {
  background-color: #ffffff;
  color: #000;
  border: none;
  font-size: 1.2rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin-left: 5rem;
}

.text-section button:hover {
  background-color: #e3e3e3;
}

.text-section .button-group {
  display: flex;
  gap: 1rem;
}

.text-section .button-group button {
  padding: 1%;
  width: 10rem;
  background-color: #ffffff;
  color: #000;
  border: none;
  font-size: 1.2rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.text-section .button-group button:hover {
  background-color: #e3e3e3;
}

/* SERVICE SECTION */
.service-section {
  display: flex;
  justify-content: center;
  background-color: #ac866d; /* Brighter pink section */
  padding: 3% 0;
}

.service-item {
  margin: 0 5rem;
}

.service-item img {
  width: 50px;
  height: 50px;
  margin-bottom: 1rem;
}

.service-item p {
  color: #ffffff;
}

/* BACKGROUND IMAGE SECTION */
.background-section {
  background-image: url("https://github.com/MasoodahGeorge/nodePics/blob/main/abc.jpg?raw=true");
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 90vh;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-right: 5%;
  color: #ffffff;
  background-color: rgba(0, 0, 0, 0.5); /* Optional: Add a dark overlay */
  background-blend-mode: darken; /* Optional: Blend the overlay with the image */
}

.overlay-text {
  max-width: 40%;
  text-align: right;
}

.overlay-text h2 {
  font-size: 2rem;
  font-weight: bold;
}

.overlay-text p {
  font-size: 1rem;
  line-height: 1.5;
  margin-top: 1rem;
}

/* INFO SECTION */
.info-section {
  text-align: center;
  background-color: #d2b48c;
  padding: 3%;
}

.info-section h2,
h4 {
  font-weight: bold;
  color: #363636;
}

.info-content {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2%;
}

.info-block {
  text-align: left;
}

.info-block h3 {
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 3%;
  color: #474747;
}

.info-block p {
  font-size: 1rem;
  line-height: 1.6;
  margin: 0;
  color: #474747;
}

.divider {
  width: 1px;
  height: 8rem;
  background-color: #474747;
}

/* IMAGE COLLAGE */
.container-fullwidth {
  width: 100%;
  margin: 0 auto;
}

.row.no-gutters {
  margin-right: 0;
  margin-left: 0;
}

.col {
  padding: 0;
}

.img-full {
  width: 100%;
  height: 50vh;
  object-fit: cover;
}

/* Animation */
.fade-in {
  opacity: 0;
  transform: translateY(20px);
  animation: fadeInUp 1s ease-out forwards;
}

@keyframes fadeInUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
