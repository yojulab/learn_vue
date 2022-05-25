import { ref } from "vue";
function amount(_amount = 0) {
  const amount = ref(_amount);
  function addMoney(money) {
    amount.value += money;
  }
  return {
    amount,
    addMoney,
  };
}

export default amount;
