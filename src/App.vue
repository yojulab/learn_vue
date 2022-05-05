<template>
  <h2>Hello World</h2>
  <button @click="showModalFlag = true">Show Modal</button>
  <ModalWindow v-if="showModalFlag" @closeAction="closeModal"></ModalWindow>
</template>

<script>
import ModalWindow from "./components/ModalWindow.vue";
export default {
  name: "App",
  components: {
    ModalWindow,
  },
  data() {
    return {
      showModalFlag: false,
    };
  },
  methods: {
    closeModal() {
      console.log("received closeAction!");

      this.showModalFlag = false;
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
