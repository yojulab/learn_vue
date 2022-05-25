<template>
  <h3>Hello World</h3>
  <CompositionReusability />
</template>

<script>
import CompositionReusability from "./components/compositions/CompositionReusability.vue";
export default {
  name: "App",
  components: {
    CompositionReusability,
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
