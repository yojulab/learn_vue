export default {
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
