<template>
  <v-btn
    @click="router.push({ name: 'Catalog' })"
    variant="elevated"
    color="#D48FC5"
  >
    Back to Catalog
  </v-btn>
  <div v-if="!store.cart.length" style="text-align: center">
    <h1>Empty Cart ...</h1>
  </div>
  <div class="cart-items" v-else>
    <div class="cart-item" v-for="item in store.cart" :key="item.id">
      <div class="item-details">
        <img :src="item.image" alt="" />
        <span>{{ item.title }}</span>
        <span>Category: {{ item.category }}</span>
        <span>Price: ${{ item.price }}</span>
        <v-btn
          @click="removeFromCart(item.id)"
          variant="outlined"
          color="#D48FC5"
        >
          Remove
        </v-btn>
      </div>
    </div>

    <v-btn
      v-if="store.cart.length > 0"
      @click="buy"
      variant="elevated"
      color="#802C6E"
    >
      Purchase
    </v-btn>
  </div>
</template>

<script setup>
import { productsStore } from "@/api/stores/products";
import { useRouter } from "vue-router";

const router = useRouter();

const store = productsStore();

const removeFromCart = (id) => {
  store.removeFromCart(id);
};

const buy = () => {
  router.push({ name: "Dashboard" });
};
</script>

<style scoped>
.item-details {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
  margin-top: 20px;
  box-shadow: 0 0 17px 6px #e7e7e7;
  border-radius: 8px;
  padding: 16px;
}

.item-details img {
  width: 8%;
}
</style>
