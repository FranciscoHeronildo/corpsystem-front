<template>
  <v-sheet class="ma-2 pa-2">
    <v-card class="product">
      <v-img :src="props.productData.image" height="200px" cover />

      <v-card-title>
        {{ props.productData.title }}
      </v-card-title>

      <v-card-subtitle> $ {{ props.productData.price }} </v-card-subtitle>

      <v-card-text class="description">
        <span
          v-tooltip.bottom="props.productData.description"
          class="tooltip-target"
        >
          {{ truncateDescription(props.productData.description) }}
        </span>
      </v-card-text>

      <v-card-actions>
        <v-btn @click="goToProductPage(props.productData.id)">
          Add to cart
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-sheet>
</template>

<script>
import { defineComponent } from "vue";
import VTooltip from "v-tooltip";

export default defineComponent({
  name: "ProductItem",
  directives: {
    Tooltip: VTooltip,
  },
  methods: {
    truncateDescription(description) {
      const maxLength = 100;
      if (description.length > maxLength) {
        return description.slice(0, maxLength) + "...";
      }
      return description;
    },
  },
});
</script>

<script setup>
import { defineProps, defineEmits } from "vue";
const props = defineProps({
  productData: {
    type: Object,
    required: true,
  },
});

const emit = defineEmits(["item-clicked"]);

const goToProductPage = (productId) => {
  emit("item-clicked", productId);
};
</script>

<style scoped>
.description {
  max-height: 3em;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.tooltip-target {
  cursor: help;
}
</style>
