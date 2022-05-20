// Event 종류 : stop, capture, self, once, passive, prevent
<template>
  <button @click.right="increment($event, 5)">right +</button>
  <button @click.left="decrement($event, 5)">left -</button>
  <h2>{{ number }}</h2>
  <button @click="increment($event, 2)">+</button>
  <button @click="decrement($event, 1)">-</button>
  <p></p>
  <a href="https://www.google.com/" @click="movePageWithAnchor">google</a>
  <h2>{{ message }}</h2>
  <button v-on:click="switchMessage()">switch Message</button>
  <button @mouseover="changeMessage(true)" @mouseleave="changeMessage(false)">
    change Message
  </button>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      message: "Hello World",
      switch: true,
      number: 0,
    };
  },
  methods: {
    increment(event, plusnumber) {
      this.number = this.number + plusnumber;
    },
    decrement(event, minusnumber) {
      this.number = this.number - minusnumber;
    },
    movePageWithAnchor(event) {
      const check = confirm("Are you sure?");
      if (check) {
        console.log("move page");
        // console.log(event.target.href);
      } else {
        console.log("cancel");
        event.preventDefault();
      }
    },
    changeMessage(bool) {
      if (bool) {
        this.message = "Mouse Over";
      } else {
        this.message = "Mouse Leave";
      }
    },
    switchMessage() {
      if (this.switch) {
        this.message = "Goodbye World";
      } else {
        this.message = "Hello World";
      }
      this.switch = !this.switch;
    },
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
