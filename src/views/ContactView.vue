<template>
    <section class="contact-section">
      <div class="contact-header">
        <h2>Let's Connect</h2>
        <p>I'm a paragraph. Click here to add your own text and edit me. Let your users get to know you.</p>
      </div>
  
      <div class="contact-content">
        <div class="contact-form">
          <form @submit.prevent="submitForm">
            <div class="form-group">
              <div class="input-group">
                <label for="first-name">First Name *</label>
                <input type="text" id="first-name" required>
              </div>
              <div class="input-group">
                <label for="last-name">Last Name *</label>
                <input type="text" id="last-name" required>
              </div>
            </div>
  
            <div class="input-group">
              <label for="email">Email *</label>
              <input type="email" id="email" required>
            </div>
  
            <div class="input-group">
              <label for="message">Message</label>
              <textarea id="message" rows="4"></textarea>
            </div>
  
            <button type="submit" class="submit-button">Send</button>
          </form>
        </div>
  
        <div class="contact-info">
          <div class="info-item">
            <img src="https://github.com/MasoodahGeorge/nodePics/blob/main/icons%20(2).png?raw=true" alt="Map Icon" />
            <h5>Address</h5>
            <p>500 Terry Francine St.<br>San Francisco, CA 94158</p>
          </div>
          <div class="info-item">
            <img src="https://github.com/MasoodahGeorge/nodePics/blob/main/icons%20(3).png?raw=true" alt="Phone Icon" />
            <h5>Phone</h5>
            <p>123-456-7890</p>
          </div>
          <div class="info-item">
            <img src="https://github.com/MasoodahGeorge/nodePics/blob/main/icons%20(1).png?raw=true" alt="Email Icon" />
            <h5>Email</h5>
            <p>info@mysite.com</p>
          </div>
          <div class="info-item">
            <img src="https://github.com/MasoodahGeorge/nodePics/blob/main/icons%20(4).png?raw=true" alt="Thumbs Up Icon" />
            <h5>Follow</h5>
            <div class="social-links">
              <a href="https://www.facebook.com/" target="_blank"><img src="https://raw.githubusercontent.com/MasoodahGeorge/nodePics/main/1.webp" alt="Facebook Icon" /></a>
              <a href="https://x.com/" target="_blank"><img src="https://raw.githubusercontent.com/MasoodahGeorge/nodePics/main/12.webp" alt="Twitter Icon" /></a>
              <a href="https://www.instagram.com/" target="_blank"><img src="https://raw.githubusercontent.com/MasoodahGeorge/nodePics/main/3.webp" alt="Instagram Icon" /></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    methods: {
      submitForm() {
        // Handle form submission
        console.log("Form submitted");
      }
    }
  }
  </script>
  
  <style scoped>
  .contact-section {
    margin-top: 60px;
    padding: 2rem;
    background-color: #fef5ec;
    text-align: center;
  }
  
  .contact-header h2 {
    font-size: 2rem;
    margin-bottom: 0.5rem;
  }
  
  .contact-header p {
    color: #666;
    margin-bottom: 2rem;
  }
  
  .contact-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 2rem;
  }
  
  .contact-form {
    flex: 1;
    max-width: 40%;
  }
  
  .contact-info {
    flex: 1;
    max-width: 50%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
  }
  
  .form-group {
    display: flex;
    justify-content: space-between;
  }
  
  .input-group {
    flex: 1;
    display: flex;
    flex-direction: column;
    margin-bottom: 1rem;
    padding: 0 1rem;
  }
  
  .input-group input,
  .input-group textarea {
    padding: 0.5rem;
    border: 1px solid #000;
    width: 100%;
  }
  
  .submit-button {
    padding: 0.5rem 1rem;
    background-color: #6b705c;
    color: #fff;
    border: none;
    cursor: pointer;
    margin-top: 1rem;
  }
  
  .info-item {
    margin-bottom: 1.5rem;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
  }
  
  .info-item img {
    width: 24px; /* Adjust size as needed */
    margin-bottom: 0.5rem;
  }
  
  .info-item h5 {
    font-size: 1rem;
    margin-bottom: 0.5rem;
    color: #333;
  }
  
  .info-item p {
    margin: 0;
    color: #666;
  }
  
  .social-links a {
    margin-right: 0.5rem;
  }
  
  .social-links img {
    width: 24px; /* Adjust size as needed */
  }
  </style>
  