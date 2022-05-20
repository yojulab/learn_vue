<template>
  <ProductList :products="products"></ProductList>
  <div>inner data : {{ products }}</div>
</template>

<script>
import ProductList from "../components/ProductList.vue";
export default {
  name: "App",
  data() {
    return {
      message: "Hello Vue!",
      products: [
        { name: "Phone", price: 200, quantity: 3, company: "Apple", id: 1 },
        { name: "Tablet", price: 300, quantity: 5, company: "Samsung", id: 2 },
        { name: "Laptop", price: 400, quantity: 2, company: "Dell", id: 3 },
        { name: "TV", price: 500, quantity: 7, company: "Sony", id: 4 },
        { name: "Camera", price: 600, quantity: 4, company: "Nikon", id: 5 },
      ],
    };
  },
  components: {
    ProductList,
  },
};
</script>

<style>
.app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
