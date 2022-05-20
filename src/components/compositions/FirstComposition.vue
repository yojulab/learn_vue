<template>
  <h3>FirstComposition</h3>
  <div>{{ message }}, {{ age }}</div>
</template>

<script>
import { reactive, toRefs } from "vue";
export default {
  name: "FirstComposition",
  setup() {
    const state = reactive({
      message: "Hello Vue!",
      age: 20,
    });
    return {
      ...toRefs(state),
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
