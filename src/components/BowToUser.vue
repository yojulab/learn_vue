<template>
  <div>
    <h3 v-bind="$attrs">{{ msg }} - Object : {{ lectureInfor.title }}</h3>
    <h3>{{ msg }} - message : {{ propMessage }}, flag : {{ propFlag }}</h3>
    <h3>{{ msg }} - message : {{ propMessage }}</h3>
  </div>
</template>
<script>
export default {
  name: "BowToUser",
  inheritAttrs: false,
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
