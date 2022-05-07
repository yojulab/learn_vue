<template>
  <h4>First Level</h4>
  <SecondLevel />
</template>

<script>
import SecondLevel from "./SecondLevel.vue";
export default {
  name: "FirstLevel",
  components: {
    SecondLevel,
  },
};
</script>

<style></style>
