<template>
  <h3>Hello World</h3>
  <div class="modal">This is a simple modal.</div>
  <teleport to="#extra-modal" :disabled="showModal">
    <div class="modal">This is a modal with #extra-modal in index.html</div>
    <button @click="showModal = !showModal">show Modal</button>
  </teleport>
  <teleport to="#extra-modal" :disabled="showModal02">
    <div class="modal">This is a modal 02 with #extra-modal in index.html</div>
    <button @click="showModal02 = !showModal02">show Modal 02</button>
  </teleport>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      showModal: false,
      showModal02: false,
    };
  },
  // components: {
  //   HelloWorld
  // }
};
</script>

<style scoped>
.modal {
  margin: 2px;
  background: rgba(0, 0, 0, 0.5);
}
</style>
