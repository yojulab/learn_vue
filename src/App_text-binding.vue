<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  <h1>Hello World</h1>
  <!-- text binding -->
  <p>{{ message }} App</p>
  <!-- Error <p v-text="message">App</p> -->
  <p v-text="`${message} App`"></p>
  <p>{{ user }}</p>
  <p>{{ user.name }}</p>
  <!-- v-html -->
  <p v-html="button_html"></p>
  <p v-html="button_hack"></p>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: "App",
  data() {
    return {
      message: "Welcome to Your Vue.js",
      user: {
        name: "John Doe",
        age: 30,
      },
      button_html: "<button>Click Me</button>",
      button_hack: `<button onclick='document.body.style="background:blue;transform:rotate(180deg)"'>Click Hack</button>`,
    };
  },
  // components: {
  //   HelloWorld
  // }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
