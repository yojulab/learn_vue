<template>
  <h3>Child Componet</h3>
  <input type="text" v-model="message" />
</template>

<script>
export default {
  name: "Child",
  data() {
    return {
      message: "Hello World",
    };
  },
  methods: {
    sayMessage(message = "this is Child") {
      if (message) {
        this.message = message;
      }
      console.log(message);
    },
  },
};
</script>

<style></style>
