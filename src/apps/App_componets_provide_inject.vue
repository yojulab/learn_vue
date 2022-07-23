<template>
  <h2>Main App Vue</h2>
  <h3>Message : {{ message }}</h3>
  <h3>from provide Object to inject on Third Level</h3>
  <FirstLevel />
</template>

<script>
import FirstLevel from "../components/provide_inject/FirstLevel.vue";
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
div * {
  margin-left: 1rem;
}
</style>
