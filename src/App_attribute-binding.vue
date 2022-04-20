<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  <!-- class binding -->
  <h1 id="title">Hello World</h1>
  <h1 v-bind:id="'title'">Hello World</h1>
  <a v-bind:href="bind_url" v-bind:target="'_blank'">Google</a>
  <img v-bind:src="bind_img.src" v-bind:alt="bind_img.alt" />
  <input v-bind:type="bind_input.type" v-bind:value="bind_input.value" />
  <h1 v-bind:style="bind_style">Hello World</h1>
  <h1 v-bind:style="[bind_style, bind_style_base]">Hello World</h1>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: "App",
  data() {
    return {
      message: "Welcome to Your Vue.js",
      isActive: false,
      bind_title: "title",
      bind_url: "https://google.com",
      bind_img: {
        src: "https://placeimg.com/100/100/any",
        alt: "Vue logo",
      },
      bind_input: {
        // type: "text",
        type: "color",
        value: "blue",
      },
      bind_style: {
        "background-color": "red",
        fontSize: "20px",
        border: "1px solid black",
        "text-align": "center",
      },
      bind_style_base: {
        "background-color": "green",
      },
    };
  },
  // components: {
  //   HelloWorld
  // }
};
</script>

<style>
#title {
  color: blueviolet;
  text-align: center;
  margin-top: 10px;
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
