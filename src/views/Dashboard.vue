<template>
  <div class="pdf-content">
    <h1>Product Report</h1>
    <ul>
      <li v-for="item in store.cart" :key="item.id">
        {{ item.title }} - ${{ item.price }}
      </li>
    </ul>
    <v-btn @click="generatePDF" variant="elevated" color="#802C6E"
      >Download PDF</v-btn
    >
  </div>
</template>

<script setup>
import { productsStore } from "@/api/stores/products";
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";

const store = productsStore();

pdfMake.vfs = pdfFonts.pdfMake.vfs;

const generatePDF = () => {
  const productList = store.cart.map(
    (item) => `${item.title} - $${item.price}`
  );

  const documentDefinition = {
    content: [{ text: "Product Values", style: "header" }, productList],
    styles: {
      header: {
        fontSize: 18,
        bold: true,
        margin: [0, 0, 0, 10],
      },
    },
  };

  pdfMake.createPdf(documentDefinition).open();
};
</script>

<style scoped>
.pdf-content {
  margin: 20px;
}
</style>
