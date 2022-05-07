<template>
  <h2>Main App Vue</h2>
  <FirstLevel />
</template>

<script>
import FirstLevel from "./components/provide_inject/FirstLevel.vue";
export default {
  name: "App",
  components: {
    FirstLevel,
  },
  data() {
    return {
      message: "Hello Vue!",
    };
  },
  provide() {
    return {
      message: this.message,
    };
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
