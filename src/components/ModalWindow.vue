<template>
  <div class="wrapper">
    <h3>{{ message }}</h3>
    <button @click="closeModal">Close Modal</button>
    <p></p>
    <input type="text" name="" id="" v-model="message" />
    <button @click="sendMessage">send Message</button>
  </div>
</template>

<script>
export default {
  name: "ModalWindow",
  data() {
    return {
      message: "Modal Window",
      message02: "Send Message",
    };
  },
  methods: {
    closeModal() {
      console.log("sent closeAction!");
      this.$emit("closeAction");
    },
    sendMessage() {
      this.$emit("sendMessage", this.message, this.message02);
    },
  },
};
</script>

<style>
.wrapper {
  background: #2c3e50;
  text-align: center;
  margin-top: 60px;
}
</style>
