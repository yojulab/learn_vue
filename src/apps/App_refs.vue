<template>
  <h3>Hello World</h3>
  <Parent />
</template>

<script>
import Parent from "../components/refs/Parent.vue";
export default {
  name: "App",
  components: {
    Parent,
  },
};
</script>

<style></style>
