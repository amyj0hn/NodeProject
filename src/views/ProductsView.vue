<template>
  <div class="container">
    <div class="row">
      <h2 class="display-2">Products</h2>
    </div>

    <!-- Filters -->
    <div class="controls mb-4">
      <!-- Search -->
      <input type="text" v-model="searchQuery" placeholder="Search products..." class="form-control me-2" />

      <!-- Category -->
      <select v-model="selectedCategory" class="form-select me-2">
        <option value="">All Categories</option>
        <option v-for="category in categories" :key="category.id" :value="category.id">
          {{ category.name }}
        </option>
      </select>

      <!-- Sort -->
      <select v-model="sortOrder" class="form-select">
        <option value="asc">Price: Low to High</option>
        <option value="desc">Price: High to Low</option>
      </select>
    </div>

    <!-- Products -->
    <div class="row gap-2 justify-content-center my-2" id="productgrid" v-if="filteredAndSortedProducts.length">
      <Card v-for="product in filteredAndSortedProducts" :key="product.prodID" class="card">
        <template #cardHeader>
          <img :src="product.prodUrl" loading="lazy" class="img-fluid" :alt="product.prodName" />
        </template>
        <template #cardBody>
          <h5 class="card-title fw-bold">
            {{ product.prodName }}
          </h5>
          <p class="lead"><span> Amount </span>: R{{ product.amount }}</p>
          <div class="button-wrapper d-md-flex d-block justify-content-between">
            <router-link :to="`/product/${product.prodID}`">
              <button class="btn btn-outline-dark me-2">View</button>
            </router-link>
          </div>
        </template>
      </Card>
    </div>

    <!-- Spinner -->
    <div v-else>
      <Spinner />
    </div>
  </div>
</template>

<script setup>
import Card from "@/components/CardComp.vue";
import Spinner from "@/components/SpinnerComp.vue";
import { computed, onMounted, ref } from "vue";
import { useStore } from "vuex";

const store = useStore();
const products = computed(() => store.state.products || []);
const categories = ref([]);
const searchQuery = ref("");
const sortOrder = ref("asc");
const selectedCategory = ref("");

onMounted(() => {
  store.dispatch("fetchProducts");
  fetchCategories();
});

async function fetchCategories() {
  try {
    const response = await fetch("https://nodeeomp-sf1q.onrender.com/categories");
    if (!response.ok) throw new Error("Failed to fetch categories");
    categories.value = await response.json();
  } catch (error) {
    console.error("Error fetching categories:", error);
    categories.value = [];
  }
}

const filteredAndSortedProducts = computed(() => {
  let filtered = products.value.filter((product) =>
    product.prodName.toLowerCase().includes(searchQuery.value.toLowerCase()) &&
    (selectedCategory.value === "" || product.categoryId === selectedCategory.value)
  );

  return filtered.sort((a, b) =>
    sortOrder.value === "asc" ? a.amount - b.amount : b.amount - a.amount
  );
});
</script>

<style scoped>
.lead {
  color: #333;
}

.container {
  padding-top: 80px;
}

#productgrid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
  justify-items: center;
  align-items: start;
  margin: 0 auto;
  padding: 20px;
}

.card {
  width: 100%;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  overflow: hidden;
}

.img-fluid {
  width: 100%;
  height: auto;
  display: block;
  object-fit: cover;
  border-bottom: 1px solid #ddd;
}

.controls {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  margin-bottom: 20px;
}

.form-control,
.form-select {
  flex: 1;
  max-width: 200px;
  margin-right: 10px;
}

.button-wrapper {
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
}

.button-wrapper button,
.button-wrapper .router-link {
  flex: 1;
  text-align: center;
}

@media (max-width: 576px) {
  #productgrid {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }

  .card {
    padding: 10px;
  }

  .controls {
    flex-direction: column;
    align-items: flex-start;
  }

  .form-control,
  .form-select {
    margin-bottom: 10px;
    max-width: 100%;
  }
}
</style>
