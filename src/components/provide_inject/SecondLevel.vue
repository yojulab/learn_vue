<template>
  <div>
    <h4>Second Level</h4>
    <ThirdLevel />
  </div>
</template>

<script>
import ThirdLevel from "./ThirdLevel.vue";
export default {
  name: "SecondLevel",
  components: {
    ThirdLevel,
  },
};
</script>

<style></style>
