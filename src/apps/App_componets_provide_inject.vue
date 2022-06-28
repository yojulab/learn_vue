<template>
  <h2>Main App Vue</h2>
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

<style></style>
