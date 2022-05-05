<template>
  <ul>
    <li v-for="(product, idx) in products" :key="idx">
      <!-- <h4>{{ product }}</h4> -->
      <ProductItem :product="product" id="child" />
    </li>
  </ul>
</template>

<script>
import ProductItem from "./ProductItem.vue";
export default {
  name: "ProducsList",
  props: {
    products: {
      type: Array,
      required: true,
    },
  },
  components: {
    ProductItem,
  },
};
</script>

<style></style>
