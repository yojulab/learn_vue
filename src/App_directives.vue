<template>
  highlight : <input type="text" name="" id="" v-highlight /><br />
  focus : <input type="text" v-focus name="" id="" />
  <h4 v-pre>Pre : {{ message }}</h4>
  <h4 v-once>Message Once : {{ message }}</h4>
  <h4>Message : {{ message }}</h4>
  <button @click="changeMessage">Change Message</button>
</template>

<script>
export default {
  name: "App",
  directives: {
    focus: {
      mounted(element) {
        element.focus();
      },
    },
    highlight: {
      mounted(element) {
        console.log({ element });
        element.style.backgroundColor = "yellow";
        element.oninput = () => {
          element.style.backgroundColor = "red";
          element.style.color = "white";
        };
      },
    },
  },
  data() {
    return {
      message: "Hello World",
    };
  },
  methods: {
    changeMessage() {
      this.message = "Hello Vue";
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
