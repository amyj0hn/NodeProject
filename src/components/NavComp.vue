<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-custom fixed-top">
      <div class="container-fluid">
        <router-link class="navbar-brand" to="/">
          <img src="https://github.com/MasoodahGeorge/nodePics/blob/main/nodeprojectlogo-removebg-preview.png?raw=true" alt="Logo" height="40">
        </router-link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse justify-content-center" id="navbarNav">
          <ul class="navbar-nav text-center">
            <li class="nav-item">
              <router-link class="nav-link" to="/"><h5>Home</h5></router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/about"><h5>About</h5></router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/products"><h5>Products</h5></router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/admin"><h5>Admin</h5></router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/contact"><h5>Contact</h5></router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </template>
  
  <script>
  export default {
    name: 'NavbarComp'
  }
  </script>
  
  <style scoped>
  .nav-item {
    padding-left: 1%;
    padding-right: 1%;
  }
  
  .bg-custom {
    background-color: #F8E3E7 !important;
    padding: 1%;
    margin: 0;
  }
  
  .navbar-nav .nav-link {
    font-weight: bold;
    color: rgb(84, 84, 84) !important;
    text-decoration: none;
  }
  
  .navbar-nav .nav-link:hover {
    color: white !important;
  }
  </style>
  