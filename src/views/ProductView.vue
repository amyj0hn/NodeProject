<template>
<<<<<<< HEAD
    <div class="container">
        <div class="row">
            <h2 class="display-2">Product Details</h2>
        </div>

        <div class="row justify-content-center" v-if="product">
            <Card>
                <template #cardHeader>
                    <img :src="product.prodUrl" loading="lazy" class="img-fluid" :alt="product.prodName">
                </template>

                <template #cardBody>
                    <h5 class="card-title">{{ product.prodName }}</h5>
                    <p class="card-text" v-if="product.prodDescription">{{ product.prodDescription }}</p>
                    <p class="card-text" v-else>No description available.</p>
                    <p class="lead"><span class="text-success fw-bold">Amount</span>: R{{ product.amount }}</p>

                </template>
            </Card>
        </div>
        <div v-else>
            <Spinner/>
        </div>
=======
  <div class="container">
    <!-- Breadcrumbs -->
    <div v-if="product" class="breadcrumb mb-4">
      <router-link to="/" style="text-decoration: none; color: #333;">Home</router-link> / {{ product.prodName }}
>>>>>>> 32746195b5e5158de350adfeb09398a2ef1ea07a
    </div>

    <!-- Product Details Section -->
    <div class="row justify-content-between" v-if="product">
      <!-- Image on the Left -->
      <div class="col-md-6">
        <img
          :src="product.prodUrl"
          loading="lazy"
          class="img-fluid rounded"
          :alt="product.prodName"
        />
      </div>

      <!-- Product Details on the Right -->
      <div class="col-md-5">
        <h1 class="product-title">{{ product.prodName }}</h1>
        <p class="price">Price: R{{ product.amount }}</p>

        <p class="description">
          {{ product.prodDescription }} I'm a product description. I'm a great
          place to add more details about your product such as sizing, material,
          care instructions and cleaning instructions.
        </p>

        <div class="button-wrapper mt-4">
          <router-link to="/products">
            <button class="btn btn-outline-dark me-2" id="backbtn">
              Back to Products
            </button>
          </router-link>
          <button class="btn btn-outline-dark me-2" id="purchasebtn">
            Purchase
          </button>
        </div>
      </div>
    </div>

    <!-- Loading Spinner -->
    <div v-else>
      <Spinner />
    </div>
  </div>
</template>

<script setup>
import Spinner from "@/components/SpinnerComp.vue";
import { computed, onMounted } from "vue";
import { useStore } from "vuex";
import { useRoute } from "vue-router";

const route = useRoute();
const store = useStore();
const product = computed(() => store.state.product);

onMounted(() => {
  store.dispatch("fetchProduct", route.params.id);
});
</script>

<style>
.container {
  margin-top: 60px;
  padding: 20px;
}

.breadcrumb {
  font-size: 0.9rem;
  color: #666;
}

.product-title {
  font-size: 2rem;
  margin-bottom: 0.5rem;
}

.sku {
  font-size: 1rem;
  color: #888;
  margin-bottom: 1rem;
}

.price {
  font-size: 1.5rem;
  color: #333;
  margin-bottom: 1.5rem;
}

.img-fluid {
  width: 100%;
  max-width: 100%;
  height: auto;
  object-fit: cover;
  margin-bottom: 20px;
}

.description {
  margin-top: 15px;
  font-size: 1rem;
  color: #555;
}

.col-md-5 {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.button-wrapper {
  display: flex;
  justify-content: center;
  gap: 10px;
  width: 100%;
  margin-top: 20px;
}

.button-wrapper button {
  max-width: 200px;
}

@media (max-width: 768px) {
  .row.justify-content-between {
    flex-direction: column;
    align-items: center;
  }

  .button-wrapper {
    justify-content: center;
  }
}
</style>
