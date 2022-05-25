<template>
  <h3>Composition reusability</h3>
  <FeeAmount />
  <hr />
  <SavingAmount />
</template>

<script>
import FeeAmount from "../mixins/FeeAmount.vue";
import SavingAmount from "../mixins/SavingAmount.vue";
export default {
  components: {
    FeeAmount,
    SavingAmount,
  },
};
</script>

<style></style>
