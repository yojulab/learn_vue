<template>
  <div>Saving Amount : {{ amount }}</div>
  <button @click="addMoney(1000)">(1000)</button>
  <button @click="addMoney(2000)">(2000)</button>
  <button @click="addMoney(3000)">(3000)</button>
  <button @click="addMoney(4000)">(4000)</button>
</template>

<script>
// import amountMixin from "../../mixins/amount.js";
import amountReusable from "../../composables/amount_ref.js";

export default {
  name: "SavingAmount",
  // mixins: [amountMixin],
  // data() {
  //   return {
  //     amount: 100,
  //   };
  // },
  // methods: {
  //   // addMoney(money) {
  //   //   this.amount += money;
  //   // },
  // },
  setup() {
    const { amount, addMoney } = amountReusable(100);
    return {
      amount,
      addMoney,
    };
  },
};
</script>

<style></style>
