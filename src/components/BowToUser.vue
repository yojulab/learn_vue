<template>
  <h3>{{ msg }} - message : {{ message }}</h3>
</template>
<script>
export default {
  name: "BowToUser",
  props: {
    // message: String,
    message: {
      type: String,
      default: "Hello World!",
    },
  },
  data() {
    return {
      msg: "Bow to User",
    };
  },
};
</script>
<style scoped></style>
