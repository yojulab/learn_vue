<template>
  <div>
    Watch Message : <input type="text" name="" id="" v-model="message" />
  </div>
  <h3>{{ receipt }}</h3>
  <button @click="receipt.drinks += 1000">Buy drinks</button
  ><button @click="receipt.drinks -= 1000">Sell drinks</button>
  <h2>Current Price : {{ price }}</h2>
  <button @click="price = price + 50">+</button>
  <button @click="price = price - 50">-</button>
  <h2>{{ message }}</h2>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      message: "Hello World",
      price: 100,
      receipt: {
        foods: 4000,
        drinks: 2000,
        shopping: 1000,
      },
    };
  },
  watch: {
    message: {
      handler(newMessage, oldMessage) {
        console.log(newMessage, oldMessage);
      },
      immediate: true, // 최초에도 실행하게 하는 것
    },
    // receipt(newReceipt, oldReceipt) {  // 이렇게 쓰면 안됨
    //   console.log(newReceipt, oldReceipt);
    // },
    receipt: {
      handler(newValue, oldValue) {
        console.log(`receipt changed ${newValue} to ${oldValue}`);
      },
      deep: true,
    },
    price(newPrice, oldPrice) {
      console.log(`price changed from ${oldPrice} to ${newPrice}`);
      if (newPrice > 200 && newPrice > oldPrice) {
        this.message = "Price is too high";
      } else if (newPrice < 100 && newPrice < oldPrice) {
        this.message = "Price is too low";
      } else {
        this.message = "Price is OK";
      }
    },
  },
  // components: {
  //   HelloWorld
  // }
};
</script>

<style></style>
