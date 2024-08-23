<template>
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
                    <p class="lead"><span class="text-success fw-bold">Amount</span>: R{{ product.amount }}</p>
                </template>
            </Card>
        </div>
        <div v-else>
            <Spinner/>
        </div>
    </div>
</template>
<script setup>
import  Card from '@/components/CardComp.vue'
import Spinner from '@/components/SpinnerComp.vue'
import { computed, onMounted } from 'vue'
import { useStore } from 'vuex' 
import { useRoute } from 'vue-router'

const route = useRoute()
const store = useStore()
const product = computed(
    () => store.state.product
)

onMounted(()=>{

    store.dispatch('fetchProduct', route.params.id)
}
)

</script>
<style>
    
</style>