<template>
  <h3>Hello World</h3>
  <SavingAmount />
  <FeeAmount />
</template>

<script>
import SavingAmount from "./components/mixins/SavingAmount.vue";
import FeeAmount from "./components/mixins/FeeAmount.vue";
export default {
  name: "App",
  components: {
    SavingAmount,
    FeeAmount,
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
