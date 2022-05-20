<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  <h2
    :class="{ 'line-through': isDone === true, 'text-red': isColor === true }"
  >
    Hello World
  </h2>
  <h2 :class="isDone === false ? textThrough : 'text-red'">Hello World</h2>
  <h2 :class="textThrough">Hello World</h2>
  <h2 v-bind:class="textThrough">Hello World</h2>
  <h2 class="line-through">Hello World</h2>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: "App",
  data() {
    return {
      textThrough: "line-through",
      isDone: true,
      isColor: true,
    };
  },
  // components: {
  //   HelloWorld
  // }
};
</script>

<style>
.line-through {
  text-decoration: line-through;
}
.text-red {
  color: red;
}

/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
