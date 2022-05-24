<template>
  <div>
    <h3>{{ message }}</h3>
    <button @click="changeMessage">change Message</button>
    <input type="text" name="" id="" v-model="message" />
    <h3>{{ name }}, {{ price }}</h3>
    <button @click="changeState">change Name</button>
    <input type="text" name="" id="" v-model="name" />
    <input type="text" name="" id="" v-model="price" />
  </div>
</template>

<script>
import { ref, reactive, toRefs } from "vue";
export default {
  // name: "CompositionMethods",
  setup() {
    let message = ref("Hello Vue!");
    function changeMessage() {
      message.value = "Change World!";
    }

    const state = reactive({
      name: "Tablet",
      price: 100,
    });
    function changeState() {
      state.name = "Laptop";
      state.price += 200;
    }
    return {
      message,
      changeMessage,
      changeState,
      ...toRefs(state),
    };
    // return {
    //   message: "Hello Vue!",
    // };
  },
};
</script>

<style></style>
