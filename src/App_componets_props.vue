<template>
  <div><BowToUser :lectureInfor="lectureInfor" /> Add Object</div>
  <div><BowToUser /> default value</div>
  <div><BowToUser :message="message" /></div>
  <button @click="changeMsg()">Change Msg</button>
  <div><BowToUser message="Good Moning!" /></div>
  <div><BowToUser /></div>
  <h2>Hello World</h2>
</template>

<script>
import BowToUser from "./components/BowToUser.vue";
export default {
  name: "App",
  components: {
    BowToUser: BowToUser,
  },
  data() {
    return {
      message: "Main App.vue !",
      flag: true,
      lectureInfor: {
        title: "Vue.js",
        description:
          "Vue.js is a progressive framework for building user interfaces",
        url: "https://vuejs.org/",
        image: "https://vuejs.org/images/logo.png",
      },
    };
  },
  methods: {
    changeMsg() {
      if (this.flag) {
        this.message = "Good Night!";
      } else {
        this.message = "Good Evening!";
      }
      this.flag = !this.flag;
    },
  },
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
