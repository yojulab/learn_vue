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
  beforeCreate() {
    console.log("Child beforeCreate");
  },
  created() {
    console.log("Child created");
  },
  beforeMount() {
    console.log("Child beforeMount");
  },
  mounted() {
    console.log("Child mounted");
  },
  beforeUpdate() {
    console.log("Child beforeUpdate");
  },
  updated() {
    console.log("Child updated");
  },
  unmounted() {
    console.log("Child unmounted");
  },
  beforeUnmount() {
    console.log("Child beforeUnmount");
  },
};
</script>

<style></style>
