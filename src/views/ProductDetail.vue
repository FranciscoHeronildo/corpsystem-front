<template>
  <v-btn
    @click="router.push({ name: 'Catalog' })"
    color="#802c6e"
    variant="elevated"
  >
    Back to Catalog
  </v-btn>

  <div class="product">
    <div class="product-image">
      <img :src="selectedProduct.image" />
    </div>
    <div class="product-details">
      <p style="font-size: 20px">{{ selectedProduct.title }}</p>
      <p>Description: {{ selectedProduct.description }}</p>
      <h2>Price: ${{ selectedProduct.price }}</h2>
      <v-btn variant="elevated" color="indigo-lighten-3" @click="addToCart"
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
import { productsStore } from "@/stores/products";
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
  display: flex;
  margin-top: 50px;
}

.product-image {
  margin: 24px;
}
</style>
