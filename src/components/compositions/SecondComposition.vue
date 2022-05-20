<template>
  <h3>SecondComposition</h3>
  <div>{{ firstRef }}, {{ secondRef }}</div>
</template>

<script>
import { ref } from "vue";
export default {
  name: "FirstComposition",
  setup() {
    let firstRef = ref("First");
    let secondRef = firstRef;
    firstRef.value = "Third";

    return {
      firstRef,
      secondRef,
    };
    // return {
    //   message: "Hello Vue!",
    // };
  },
  //   data() {
  //     return {
  //       message: "Hello Vue!",
  //     };
  //   },
};
</script>

<style></style>
