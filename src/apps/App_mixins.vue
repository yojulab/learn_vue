<template>
  <h3>Hello World</h3>
  <SavingAmount />
  <FeeAmount />
</template>

<script>
import SavingAmount from "../components/mixins/SavingAmount.vue";
import FeeAmount from "../components/mixins/FeeAmount.vue";
export default {
  name: "App",
  components: {
    SavingAmount,
    FeeAmount,
  },
};
</script>

<style></style>
