<template>
  <div>Fee Amount : {{ amount }}</div>
  <button @click="addMoney(150)">(150)</button>
  <button @click="addMoney(250)">(250)</button>
  <button @click="addMoney(350)">(350)</button>
  <button @click="addMoney(450)">(450)</button>
</template>

<script>
export default {
  name: "FeeAmount",
  //   mixins: [FeeAmountMixin],
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
