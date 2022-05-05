<template>
  <div class="wrapper">
    <h3>{{ message }}</h3>
    <button @click="closeModal">Close Modal</button>
  </div>
</template>

<script>
export default {
  name: "ModalWindow",
  data() {
    return {
      message: "Modal Window",
    };
  },
  methods: {
    closeModal() {
      console.log("sent closeAction!");
      this.$emit("closeAction");
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
