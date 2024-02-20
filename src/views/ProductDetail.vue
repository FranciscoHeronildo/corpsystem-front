<template>
  <v-btn
    @click="router.push({ name: 'Catalog' })"
    color="#802C6E"
    variant="elevated"
  >
    Back to Catalog
  </v-btn>

  <div class="product">
    <div class="product-image">
      <img :src="selectedProduct.image" />
    </div>
    <div class="product-details">
      <h3>{{ selectedProduct.title }}</h3>
      <p><b>Description:</b> {{ selectedProduct.description }}</p>
      <h2>
        Price: <i>${{ selectedProduct.price }}</i>
      </h2>
      <v-btn variant="elevated" color="#D48FC5" @click="addToCart"
        >Add to Cart</v-btn
      >
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
export default defineComponent({
  name: "ProductDetails",
});
</script>

<script setup>
import { computed } from "vue";
import { productsStore } from "@/api/stores/products";
import { useRoute, useRouter } from "vue-router";

const store = productsStore();
const router = useRouter();
const route = useRoute();

const selectedProduct = computed(() => {
  return store.products.find((item) => item.id === Number(route.params.id));
});

const addToCart = () => {
  store.addToCart(selectedProduct.value);
  router.push({ name: "CartView" });
};
</script>

<style scoped>
.product {
  height: 80vh;
  width: 80vw;
  display: flex;
  margin-top: 50px;
  margin-left: 14vw;
}

.product-image {
  margin-right: 24px;
}
</style>
