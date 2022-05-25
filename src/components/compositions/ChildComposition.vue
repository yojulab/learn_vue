<template>
  <h3>Child Composition</h3>
  <h3>{{ fullMessage }}</h3>
  <button @click="sendToParent">send To Parent</button>
</template>

<script>
import { computed } from "vue";
export default {
  name: "ChildComposition",
  props: ["firstMessage", "secondMessage"],

  setup(props, context) {
    console.log(context);
    const fullMessage = computed(() => {
      return `${props.firstMessage} ${props.secondMessage}`;
    });
    function sendToParent() {
      console.log("sendToParent");
      context.emit("send message"); // error send message to parent
    }
    return {
      fullMessage,
      sendToParent,
    };
  },
};
</script>

<style></style>
