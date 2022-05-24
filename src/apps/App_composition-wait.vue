<template>
  <h3>Hello World</h3>
  <CompositionWait />
</template>

<script>
import CompositionWait from "../components/compositions/CompositionWait.vue";
export default {
  name: "App",
  components: {
    CompositionWait,
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
