<template>
  <div id="none-prop">
    <BowToUser :lectureInfor="lectureInfor" /> Add Object
  </div>
  <div><BowToUser /> need to set default value on BowToUser</div>
  <div><BowToUser :propMessage="message" :propFlag="flag" /></div>
  <div><BowToUser :propMessage="message" /></div>
  <button @click="changeMsg()">Change Msg</button>
  <div><BowToUser message="Good Moning!" /></div>
  <div><BowToUser /></div>
  <h2>Hello World</h2>
</template>

<script>
import BowToUser from "../components/BowToUser.vue";
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

<style></style>
