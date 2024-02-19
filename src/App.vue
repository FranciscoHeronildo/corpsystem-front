<template>
  <header>
    <v-toolbar>
      <img
        src="../src/assets/img/logo.png"
        alt="Logo"
        style="width: 48px; margin: 10px"
      />
      <v-toolbar-title>Corpsystem - Fake Store</v-toolbar-title>
      <v-btn
        @click="router.push({ name: 'CartView' })"
        color="#802c6e"
        variant="elevated"
        >Items in Cart: {{ store.cart.length }}
      </v-btn>
    </v-toolbar>
  </header>
  <main>
    <RouterView />
  </main>
</template>

<script setup>
import { useRouter } from "vue-router";
import { productsStore } from "@/stores/products";

const router = useRouter();
const store = productsStore();
</script>

<style scoped></style>
