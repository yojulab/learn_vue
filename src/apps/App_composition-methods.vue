<template>
  <h3>Hello World</h3>
  <CompositionMethods />
</template>

<script>
import CompositionMethods from "../components/compositions/CompositionMethods.vue";
export default {
  name: "App",
  components: {
    CompositionMethods,
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
