<template>
  <h3>Hello World</h3>
  <Parent />
</template>

<script>
import Parent from "../components/lifecycle/Parent.vue";
export default {
  name: "App",
  components: {
    Parent,
  },
};
</script>

<style></style>
