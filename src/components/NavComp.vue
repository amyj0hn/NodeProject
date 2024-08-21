<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-custom fixed-top">
    <div class="container-fluid">
      <router-link class="navbar-brand" to="/">
        <img src="https://github.com/MasoodahGeorge/nodePics/blob/main/nodeprojectlogo-removebg-preview.png?raw=true" alt="Logo" height="40">
      </router-link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
        <ul class="navbar-nav text-center">
          <li class="nav-item">
            <router-link class="nav-link" to="/" exact>Home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/about">About</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/products">Products</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/admin">Admin</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/contact">Contact</router-link>
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
  padding-left: 0;
}

.bg-custom {
  background-color: #F8E3E7 !important;
  padding: 1%;
  margin: 0;
}

.navbar-nav .nav-link {
  /* font-weight: bold; */
  color: rgb(84, 84, 84) !important;
  margin-right: 3rem;
  position: relative;
}

.navbar-nav .nav-link::after {
  content: '';
  position: absolute;
  width: 0;
  height: 2px;
  background-color: currentColor;
  left: 0;
  bottom: -5px;
  transition: width 0.3s ease-in-out;
}

.navbar-nav .nav-link:hover::after,
.navbar-nav .nav-link.router-link-active::after {
  width: 100%;
}

.navbar-nav .nav-link.router-link-active {
  color: rgb(84, 84, 84) !important; /* Keep the original color when active */
}
</style>
