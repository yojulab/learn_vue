<template>
  <h2>Hello World</h2>
  <button @click="showModalFlag = true">Show Modal</button>
  <ModalWindow
    v-if="showModalFlag"
    @closeAction="closeModal"
    @sendMessage="receivedMessage"
  ></ModalWindow>
</template>

<script>
import ModalWindow from "../components/ModalWindow.vue";
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
    receivedMessage(message, message02) {
      console.log("received message: " + message + " " + message02);
    },
  },
};
</script>

<style></style>
