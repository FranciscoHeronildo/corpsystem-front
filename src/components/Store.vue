<template>
  <div class="container">
    <n-space>
      <n-spin size="large" />
    </n-space>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background-color: #f5f5f5;
  font-weight: bold;
  font-size: x-large;
  font-family: "Roboto", sans-serif;
}
</style>

<!-- <script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  setup() {
    const produtos = ref([]);

    const fetchProducts = async () => {
      const response = await api.get("/products");
    };
    fetchProducts();
  },
});
</script> -->
