<template>
  <div>Fee Amount : {{ amount }}</div>
  <button @click="addMoney(150)">(150)</button>
  <button @click="addMoney(250)">(250)</button>
  <button @click="addMoney(350)">(350)</button>
  <button @click="addMoney(450)">(450)</button>
</template>

<script>
// import amountMixin from "../../mixins/amount.js";
import amountReusable from "../../composables/amount_ref.js";
export default {
  name: "FeeAmount",
  // mixins: [amountMixin],
  // data() {
  //   return {
  //     // amount: 0,
  //   };
  // },
  // methods: {
  //   // addMoney(money) {
  //   //   this.amount += money;
  //   // },
  // },
  setup() {
    const { amount, addMoney } = amountReusable(0);
    return {
      amount,
      addMoney,
    };
  },
};
</script>

<style></style>
