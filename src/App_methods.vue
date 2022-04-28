<template>
  <h2>subtract {{ subtract(5) }}</h2>
  <h2>subtract {{ subtract(5) }} without setting param default in method</h2>
  <h2>add : {{ add(10) }}</h2>
  <h2>{{ sayHello() }}</h2>
</template>

<script>
export default {
  name: "App",
  methods: {
    sayHello() {
      return "Hello World";
    },
    add(input) {
      // result = firstNumber + input;   // need to this.
      this.result = this.firstNumber + input;
      return this.result;
    },
    // subtract: (input) => { // can't use arrow function with method (lexical binding)
    subtract(input01, input02 = 3) {
      this.result = input01 - input02;
      return this.result;
    },
  },
  data() {
    return {
      message: "Hello Vue!",
      firstNumber: 0,
      secondNumber: 0,
      result: 0,
    };
  },
  // components: {
  //   HelloWorld
  // }
};
</script>

<style>
.app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
