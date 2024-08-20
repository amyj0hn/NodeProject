<template>
  <div class="home-sec">
    <div class="text-section">
      <h1>Welcome to Amigurumi!</h1>
      <p class="slogan">Where Every Loop Is a Little Piece of Joy!</p>
    </div>
    <br />
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
            <h3>Discover the Art of Amigurumi</h3>
            <p>
              Step into a world where creativity meets craftsmanship with our
              unique collection of crochet animals, lovingly handmade to bring
              smiles to all ages. Each piece is crafted with meticulous
              attention to detail, turning simple yarn into delightful
              characters that capture the essence of charm and playfulness.
              Whether you're a seasoned collector or looking for a special gift,
              our Amigurumi creations offer a whimsical touch to any home.
            </p>
          </div>
        </div>
      </div>
      <!-- Repeat for additional rows -->
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <h3>Discover the Art of Amigurumi</h3>
            <p>
              Step into a world where creativity meets craftsmanship with our
              unique collection of crochet animals, lovingly handmade to bring
              smiles to all ages. Each piece is crafted with meticulous
              attention to detail, turning simple yarn into delightful
              characters that capture the essence of charm and playfulness.
              Whether you're a seasoned collector or looking for a special gift,
              our Amigurumi creations offer a whimsical touch to any home.
            </p>
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
            <h3>Discover the Art of Amigurumi</h3>
            <p>
              Step into a world where creativity meets craftsmanship with our
              unique collection of crochet animals, lovingly handmade to bring
              smiles to all ages. Each piece is crafted with meticulous
              attention to detail, turning simple yarn into delightful
              characters that capture the essence of charm and playfulness.
              Whether you're a seasoned collector or looking for a special gift,
              our Amigurumi creations offer a whimsical touch to any home.
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="info-section">
      <h2>Find Your Next Cuddly Companion</h2>
      <br>
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
  background-image: url("https://github.com/MasoodahGeorge/nodePics/blob/main/pexels-anete-lusina-4792081.jpg?raw=true");
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 5%;
  color: #ffffff;
  min-height: 100vh;
}

h1 {
  font-size: 5rem;
  margin: 0;
}

.slogan {
  font-size: 1rem;
}

/* IMAGES SECTION */
.image-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background-color: #f8f1e9; /* Matches the light beige background color */
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
  height: 45rem;
  object-fit: cover;
}

.col-md-6:first-child {
  padding-right: 0;
}

.col-md-6:last-child {
  padding-left: 0;
  text-align: center; /* Center the text */
}

h3 {
  font-size: 2rem;
  font-weight: bold;
  color: #363636; /* Matches the .info-section heading color */
}

p {
  font-size: 1.2rem;
  line-height: 1.6;
  margin: 0;
  color: #474747; /* Matches the .info-section text color */
}


/* INFO SECTION */
.info-section {
  text-align: center;
  background-color: #f8f1e9;
  padding: 3%;
}

.info-section h2, h4 {
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
  font-family: "Times New Roman", Times, serif;
}

.info-block h3 {
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 10px;
  color: #474747; /* Matches the black text color */
}

.info-block p {
  font-size: 1rem;
  line-height: 1.6;
  margin: 0;
  color: #474747; /* Matches the black text color */
}

.divider {
  width: 1px;
  height: 60px;
  background-color: #474747; /* Black color for the divider */
}
</style>
