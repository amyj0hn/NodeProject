<template>
  <div class="home-sec">
    <div class="text-section">
      <h1>Welcome to Amigurumi!</h1>
      <p class="slogan">Where Every Loop Is a Little Piece of Joy!</p>
      <div class="button-group">
        <router-link to="/shop" class="button-link">
          <button>Shop Now</button>
        </router-link>
        <router-link to="/about" class="button-link">
          <button>Learn More</button>
        </router-link>
      </div>
    </div>
    <div class="image-section">
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <img
              src="https://github.com/MasoodahGeorge/nodePics/blob/main/pexels-anete-lusina-4792086.jpg?raw=true"
              alt="Amigurumi Art"
            />
          </div>
          <div class="col-md-6">
            <div class="text">
              <h3>Discover the Art of Amigurumi</h3>
              <p>
                Step into a world where creativity meets craftsmanship with our
                unique collection of crochet animals, lovingly handmade to bring
                smiles to all ages. Each piece is crafted with meticulous
                attention to detail, turning simple yarn into delightful
                characters that capture the essence of charm and playfulness.
                Whether you're a seasoned collector or looking for a special
                gift, our Amigurumi creations offer a whimsical touch to any
                home.
              </p>
            </div>
          </div>
        </div>
      </div>
      <!-- Repeat for additional rows -->
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <div class="text">
              <h3>The Timeless Appeal of Handcrafted Treasures</h3>
              <p>
                In a fast-paced world dominated by mass production, our
                Amigurumi pieces stand as a testament to the enduring value of
                handmade artistry. Each crochet creation tells a story of
                patience, skill, and love, transforming ordinary materials into
                extraordinary keepsakes. Whether it's a cuddly companion for a
                child or a charming decoration for your home, these handcrafted
                treasures are more than just items—they're heirlooms in the
                making, cherished for their individuality and the care infused
                into every stitch.
              </p>
            </div>
          </div>
          <div class="col-md-6">
            <img
              src="https://github.com/MasoodahGeorge/nodePics/blob/main/pexels-2375361-16228902.jpg?raw=true"
              alt="Amigurumi Art"
            />
          </div>
        </div>
      </div>

      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <img
              src="https://github.com/MasoodahGeorge/nodePics/blob/main/pexels-bogdan-groshev-722715367-20347259.jpg?raw=true"
              alt="Amigurumi Art"
            />
          </div>
          <div class="col-md-6">
            <div class="text">
              <h3>A Tradition of Quality and Creativity</h3>
              <p>
                Our Amigurumi collection is built on a tradition of quality and
                creativity. We believe in the power of handmade goods to tell a
                story, and our crochet animals are no exception. Each character
                is thoughtfully designed and meticulously crafted, resulting in
                a collection that is as diverse as it is delightful. Our
                commitment to using high-quality materials ensures that every
                piece is durable, safe, and made to last. Explore our range of
                Amigurumi creations and discover the perfect companion for any
                occasion—one that embodies the charm and whimsy that only a
                handmade piece can offer.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="info-section">
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
    <div class="container-fluid">
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
</template>

<script>
export default {
  name: "HomeView",
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

/* IMAGES SECTION */
.image-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  /* background-color: #f8f1e9; */
}

.container {
  margin: 0;
  padding: 0;
  width: 100%;
  max-width: 100%;
}

.row {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  text-align: center;
}

.col-md-6 {
  padding: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.col-md-6 img {
  width: 100%;
  height: 70vh;
  object-fit: cover;
}

.col-md-6:first-child {
  padding-right: 0;
}

.col-md-6:last-child {
  padding-left: 0;
  text-align: center;
}

h3 {
  font-size: 2rem;
  font-weight: bold;
  color: #363636;
}

p {
  font-size: 1.2rem;
  line-height: 1.6;
  margin: 3%;
  color: #474747;
}

.text {
  width: 60%;
}
/* INFO SECTION */
.info-section {
  text-align: center;
  background-color: #f8f1e9;
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
  height: 80px;
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
</style>
