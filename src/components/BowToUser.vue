<template>
  <h3>{{ msg }} - Object : {{ lectureInfor.title }}</h3>
  <h3>{{ msg }} - message : {{ propMessage }}, flag : {{ propFlag }}</h3>
  <h3>{{ msg }} - message : {{ propMessage }}</h3>
</template>
<script>
export default {
  name: "BowToUser",
  props: {
    lectureInfor: {
      type: Object,
      default: () => ({
        title: "-",
        description: "-",
        url: "-",
        image: "-",
      }),
    },
    propFlag: {
      type: Boolean,
      default: false,
    },
    propMessage: {
      type: String,
      default: "Hello World!",
    },
    // propMessage: String,
  },
  data() {
    return {
      msg: "Bow to User",
    };
  },
};
</script>
<style scoped></style>
