<template>
  <h3>Hello World</h3>
  <CompositionLifecycle />
</template>

<script>
import CompositionLifecycle from "../components/compositions/CompositionLifecycle.vue";
export default {
  name: "App",
  components: {
    CompositionLifecycle,
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
