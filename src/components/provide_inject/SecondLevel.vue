<template>
  <div>
    <h4>Second Level: inject value {{ message }}</h4>
    <ThirdLevel />
  </div>
</template>

<script>
import ThirdLevel from "./ThirdLevel.vue";
export default {
  name: "SecondLevel",
  inject: ["message"],

  components: {
    ThirdLevel,
  },
};
</script>

<style></style>
