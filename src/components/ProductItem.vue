<template>
  <!-- <div>  or -->
  <div v-bind="$attrs">
    <h3>Name : {{ product.name }}</h3>
    <h4>Price : {{ product.price }}</h4>
    <h4>Quantity : {{ product.quantity }}</h4>
    <img
      :src="`https://placeimg.com/150/100/${product.id}`"
      :alt="product.name"
    />
  </div>
</template>

<script>
export default {
  name: "ProducItem",
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style></style>
