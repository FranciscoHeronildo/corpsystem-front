<script>
import api from "../server/api";
import { defineComponent, ref } from "vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

export default defineComponent({
  components: {
    FontAwesomeIcon,
  },
  setup() {
    const produtos = ref([]);

    const fetchProducts = async () => {
      const response = await api.get("/products");

      console.log(response);
    };
    fetchProducts();
  },
});
</script>

<template>
  <div>
    <font-awesome-icon icon="bag-shopping" />
    <h1>Fake Story CorpSystem</h1>
  </div>
</template>
