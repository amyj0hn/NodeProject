<template>
  <footer class="footer-comp">
    <div class="container">
      <div class="row">
        <!-- Newsletter Section -->
        <div class="col-md-4" id="news">
          <h5>Newsletter</h5>
          <p>Want to stay up to date with all the latest & newest products? Subscribe to our channel!</p>
          <form action="https://formspree.io/f/mpzvvdbv" method="POST">
            <div class="form-group">
              <label for="email">Email :</label>
              <input type="email" id="email" name="email" class="form-control" placeholder="Enter your email" required>
            </div>
            <button type="submit" class="btn btn-primary">Join Us!</button>
          </form>
        </div>

        <!-- Contact Section -->
        <div class="col-md-4" id="contact">
          <h5>Talk to Us</h5>
          <p>123-456-7890</p>
          <p>info@mysite.com</p>
          <address>
            500 Landsdowne St.<br>
            Landsdowne, WC 7780
          </address>
        </div>

        <!-- Social Media Section -->
        <div class="col-md-4 text-right" id="socials">
          <a href="https://www.facebook.com/" target="_blank">
            <img src="https://raw.githubusercontent.com/MasoodahGeorge/nodePics/main/1.webp" alt="facebook">
          </a>
          <br>
          <a href="https://www.instagram.com/" target="_blank">
            <img src="https://raw.githubusercontent.com/MasoodahGeorge/nodePics/main/3.webp" alt="instagram">
          </a>
          <br>
          <a href="https://x.com/" target="_blank">
            <img src="https://raw.githubusercontent.com/MasoodahGeorge/nodePics/main/12.webp" alt="x">
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'FooterComp'
}
</script>


<style scoped>
.footer-comp {
  background-color: #D2B48C;
  color: rgb(62, 62, 62);
  padding: 3% 0;
}

.container {
  max-width: 80%;
  margin: 0 auto;
}

.row {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}

h5 {
  font-weight: bold;
}

#news {
  text-align: start;
  width: 20%;
  margin-right: 5%;
  margin-left: 5%;
}

#contact {
  text-align: start;
  width: 20%;
  margin-right: 5%;
  margin-left: 5%;
}

#socials {
  text-align: start;
  width: 20%;
  margin-right: 5%;
  margin-left: 5%;
}

.form-control {
  flex: 1;
  margin-right: 10px;
  padding: 10px;
  border: 1px solid #ccc;
  color: rgb(69, 69, 69);
}

.btn-primary {
  background-color: rgb(96, 96, 96);
  color: white;
  padding: 3%;
}

.text-right {
  text-align: right;
}
</style>
