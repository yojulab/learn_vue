<template>
  <div>
    <h4>First Level</h4>
    <SecondLevel />
  </div>
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
