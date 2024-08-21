<template>
  <div class="about-us">
    <!-- Section 1: This Is Us -->
    <div class="section">
      <h2>This Is Us</h2>
      <p>
        We're big believers in the joy of handmade crafts and the magic of a well-crafted plushie.
        Step into our world of unique, handmade crochet dolls, crafted with love and care.
      </p>
    </div>

    <!-- Section 2: Image & Text -->
    <div class="image-text-section">
      <div class="image-container">
        <img src="https://github.com/MasoodahGeorge/nodePics/blob/main/pexels-2375361-10768164.jpg?raw=true" alt="Crochet Plushies">
      </div>
      <div class="text-container">
        <h3>Handcrafted Wonders Just for You</h3>
        <p>
          Our crochet dolls are more than just toys—they're handcrafted wonders that bring a touch of
          joy and whimsy to every home. Each doll is carefully designed to be a lasting companion.
        </p>
        <button>Explore Our Collection</button>
      </div>
    </div>

    <!-- Section 3: Real Craftsmanship -->
    <div class="text-banner">
      <h2>Real Craftsmanship. Handmade with Love.</h2>
    </div>

    <!-- Section 4: Image & Text -->
    <div class="image-text-section reverse">
      <div class="text-container">
        <h3>From Our Hearts to Your Home</h3>
        <p>
          Every stitch is a labor of love, and every doll is crafted with the utmost care. Our passion
          for crochet shines through in every detail, ensuring that your plushie is truly special.
        </p>
        <button>Visit Us</button>
      </div>
      <div class="image-container">
        <img src="https://github.com/MasoodahGeorge/nodePics/blob/main/pexels-castorlystock-3945634.jpg?raw=true" alt="Crochet Crafting">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AboutView",
};
</script>

<style scoped>
.about-us {
  margin-top: 60px;
  text-align: center;
  padding: 2rem;
  font-family: 'Times New Roman', Times, serif;
}

.section {
  padding: 2rem 0;
}

.section h2 {
  font-size: 3rem;
  color: #3f3f3f;
}

.section p {
  font-size: 1.2rem;
  color: #6f6f6f;
  max-width: 600px;
  margin: 1rem auto;
}

.image-text-section {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 0;
}

.reverse {
  flex-direction: row-reverse;
}

.image-container img {
  width: 100%;
  max-width: 500px;
  height: auto;
  object-fit: cover;
}

.text-container {
  max-width: 500px;
  padding: 1rem;
  text-align: left;
}

.text-container h3 {
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
  background-color: #ff9999;
  color: white;
  border: none;
  padding: 0.8rem 2rem;
  cursor: pointer;
  font-size: 1rem;
  border-radius: 4px;
}

.text-banner {
  background-color: #f0f0f0;
  padding: 3rem 1rem;
  margin: 2rem 0;
}

.text-banner h2 {
  font-size: 2.5rem;
  color: #3f3f3f;
}
</style>
