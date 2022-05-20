<template>
  <div>Saving Amount : {{ amount }}</div>
  <button @click="addMoney(1000)">(1000)</button>
  <button @click="addMoney(2000)">(2000)</button>
  <button @click="addMoney(3000)">(3000)</button>
  <button @click="addMoney(4000)">(4000)</button>
</template>

<script>
export default {
  name: "SavingAmount",
  //   mixins: [SavingAmountMixin],
  data() {
    return {
      amount: 0,
    };
  },
  methods: {
    addMoney(money) {
      this.amount += money;
    },
  },
};
</script>

<style></style>
