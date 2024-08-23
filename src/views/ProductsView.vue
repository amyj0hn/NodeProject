<template>
    <div class="container">
        <div class="row">
            <h2 class="display-2">Products</h2>
        </div>
        <div class="row gap-2 justify-content-center my-2" id="productgrid" v-if="products">
            <Card v-for="product in products" :key="product.prodID" class="card">
                <template #cardHeader>
                    <img :src="product.prodUrl" loading="lazy" class="img-fluid" :alt="product.prodName">
                </template>
                <template #cardBody>
                    <h5 class="card-title fw-bold">
                        {{ product.prodName }}
                    </h5>
                    <p class="lead">
                        <span>
                            Amount
                        </span>: R{{ product.amount }}</p>
                    <div class="button-wrapper d-md-flex d-block justify-content-between">
                        <!-- { name: 'product', params: { id: product.prodID } } -->
                        <router-link :to="`/product/${product.prodID}`">
                            <button class="btn btn-outline-dark me-2">
                                View
                            </button>
                        </router-link>
                    </div>
                </template>
            </Card>
        </div>
        <div v-else>
            <Spinner />
        </div>
    </div>
</template>

<script setup>
import  Card from '@/components/CardComp.vue'
import Spinner from '@/components/SpinnerComp.vue'
import { computed, onMounted } from 'vue'
import { useStore } from 'vuex' 

const store = useStore()
const products = computed(
    () => store.state.products
)

onMounted(()=> {
    console.log('there');
    store.dispatch('fetchProducts')
})

</script>
<style>
.lead{
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

.button-wrapper {
  display: flex;
  justify-content: space-between;
  /* gap: 10px; */
  margin-top: 10px;
}

.button-wrapper button,
.button-wrapper .router-link {
  flex: 1;
  text-align: center;
}

@media (max-width: 576px) {
  /* Styles for smaller screens */
  #productgrid {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }
  
  .card {
    padding: 10px;
  }
}

</style>