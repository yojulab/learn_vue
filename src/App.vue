<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  <!-- v-if -->
  <h2 v-if="isActive">Hello World</h2>
  <h2 v-else>Goodbye World</h2>
  <h2 v-if="user.age > 18">Adult {{ user.name }}</h2>
  <h2 v-else-if="user.age > 14">Teenager {{ user.name }}</h2>
  <h2 v-else>Child {{ user.name }}</h2>
  <input v-model="user.age" />

  <!-- v-once -->
  <input type="text" name="" id="" v-model="message" />
  <!-- Try Change Text -->
  <h2 v-once>Hello {{ message }}</h2>
  <h2>{{ message }}</h2>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      message: "Welcome to Your Vue.js",
      isActive: false,
      user: {
        name: "John Doe",
        age: 30,
      },
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
