<template>
  <main class="container-fluid">
    <div class="row">
      <h2 class="display-2">Admin</h2>

      <!-- Add button on admin page -->
      <div>
        <button
          class="btn btn-primary"
          data-bs-toggle="modal"
          data-bs-target="#addProductModal"
        >
          <i class="bi bi-plus-circle-fill"></i> Add Item
        </button>
      </div>

      <!-- Add Product Modal -->
      <div
        class="modal fade"
        id="addProductModal"
        tabindex="-1"
        aria-labelledby="addProductModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="addProductModalLabel">
                Add New Product
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <!-- Form to add new product -->
              <form @submit.prevent="handleAddProduct">
                <div class="mb-3">
                  <label for="productName" class="form-label"
                    >Product Name</label
                  >
                  <input
                    v-model="newProduct.prodName"
                    type="text"
                    class="form-control"
                    id="productName"
                    required
                  />
                </div>
                <div class="mb-3">
                  <label for="editDescription" class="form-label"
                    >Description</label
                  >
                  <input
                    v-model="currentProduct.amount"
                    type="text"
                    class="form-control"
                    id="editDescription"
                    required
                  />
                </div>
                <div class="mb-3">
                  <label for="Category" class="form-label">Category</label>
                  <textarea
                    v-model="newProduct.Category"
                    class="form-control"
                    id="Category"
                    required
                  ></textarea>
                </div>
                <div class="mb-3">
                  <label for="amount" class="form-label">Amount</label>
                  <input
                    v-model="newProduct.amount"
                    type="number"
                    class="form-control"
                    id="amount"
                    required
                  />
                </div>
                <div class="mb-3">
                  <label for="img_url" class="form-label">Image URL</label>
                  <input
                    v-model="newProduct.prodUrl"
                    type="text"
                    class="form-control"
                    id="img_url"
                    required
                  />
                </div>
                <button type="submit" class="btn btn-primary">
                  Add Product
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
<<<<<<< HEAD
=======
    </main>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import { useStore } from 'vuex';
  
  const store = useStore();
  const products = ref([]);
  const newProduct = ref({
    prodName: '',
    Category: '',
    amount: 0,
    prodUrl: ''
  });
  const currentProduct = ref({});
  
  const fetchProducts = async () => {
    await store.dispatch('fetchProducts');
    products.value = store.state.products;
  };
  
  const handleAddProduct = async () => {
    await store.dispatch('addAProduct', newProduct.value);
    products.value = store.state.products;
    newProduct.value = { prodName: '', Category: '', amount: 0, prodUrl: '' };
  };
  
  const handleEditProduct = (product) => {
    currentProduct.value = { ...product };
  };
  
  // const handleUpdateProduct = async () => {
  //   await store.dispatch('updateProduct', currentProduct.value);
  //   products.value = store.state.products;
  // };
  
  const handleDeleteProduct = async (prodID) => {
    await store.dispatch('deleteProduct', prodID);
    products.value = store.state.products;
  };
>>>>>>> 32746195b5e5158de350adfeb09398a2ef1ea07a

      <!-- Edit Product Modal -->
      <div
        class="modal fade"
        id="editProductModal"
        tabindex="-1"
        aria-labelledby="editProductModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="editProductModalLabel">
                Edit Product
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <!-- Form to edit product -->
              <form @submit.prevent="handleEditProduct">
                <div class="mb-3">
                  <label for="editProductName" class="form-label"
                    >Product Name</label
                  >
                  <input
                    v-model="currentProduct.prodName"
                    type="text"
                    class="form-control"
                    id="editProductName"
                    required
                  />
                </div>
                <div class="mb-3">
                  <label for="editDescription" class="form-label"
                    >Description</label
                  >
                  <input
                    v-model="currentProduct.prodDescription"
                    type="text"
                    class="form-control"
                    id="editDescription"
                    required
                  />
                </div>
                <div class="mb-3">
                  <label for="editCategory" class="form-label">Category</label>
                  <textarea
                    v-model="currentProduct.Category"
                    class="form-control"
                    id="editCategory"
                    required
                  ></textarea>
                </div>
                <div class="mb-3">
                  <label for="editAmount" class="form-label">Amount</label>
                  <input
                    v-model="currentProduct.amount"
                    type="number"
                    class="form-control"
                    id="editAmount"
                    required
                  />
                </div>
                <div class="mb-3">
                  <label for="editImgUrl" class="form-label">Image URL</label>
                  <input
                    v-model="currentProduct.prodUrl"
                    type="text"
                    class="form-control"
                    id="editImgUrl"
                    required
                  />
                </div>
                <button type="submit" class="btn btn-primary">
                  Save Changes
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <!-- Products Table -->
      <div class="table-responsive">
        <table class="table">
          <thead>
            <tr>
              <th>Item</th>
              <th>Product Name</th>
              <th>Description</th>
              <th>Category</th>
              <th>Price</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(product, index) in products" :key="product.prodID">
              <td>{{ index + 1 }}</td>
              <td>{{ product.prodName }}</td>
              <td>{{ product.prodDescription }}</td>
              <td>{{ product.Category }}</td>
              <td>R{{ product.amount }}</td>
              <td>
                <button
                  class="btn btn-warning"
                  mt-2
                  @click="handleEditProduct(product)"
                  data-bs-toggle="modal"
                  data-bs-target="#editProductModal"
                >
                  Edit
                </button>
              </td>
              <td>
                <button
                  class="btn btn-danger"
                  @click="handleDeleteProduct(product.prodID)"
                >
                  Delete
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </main>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useStore } from "vuex";

const store = useStore();
const products = ref([]);
const newProduct = ref({
  prodName: "",
  Category: "",
  amount: 0,
  prodUrl: "",
});
const currentProduct = ref({});

const fetchProducts = async () => {
  await store.dispatch("fetchProducts");
  products.value = store.state.products;
};

const handleAddProduct = async () => {
  await store.dispatch("addAProduct", newProduct.value);
  products.value = store.state.products;
  newProduct.value = { prodName: "", Category: "", amount: 0, prodUrl: "" };
};

const handleEditProduct = async (product) => {
  await store.dispatch('updateProduct', currentProduct.value);
  products.value = store.state.products;
  Object.assign(currentProduct.value, product);
};

// const handleUpdateProduct = async () => {
//   await store.dispatch('updateProduct', currentProduct.value);
//   products.value = store.state.products;
// };

const handleDeleteProduct = async (prodID) => {
  await store.dispatch("deleteProduct", prodID);
  products.value = store.state.products;
};

onMounted(fetchProducts);
</script>

<style scoped>
main {
  margin-top: 5rem;
}
.table-responsive {
  margin-top: 20px;
}
</style>
