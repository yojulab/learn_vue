<template>
  <h3>CompositionLifecycle</h3>
  <input type="text" name="" id="" v-model="name" ref="inputRef" />
  <ChildComposition
    firstMessage="From"
    secondMessage="Message"
    @receiveFromChild="sendToParent"
  />
</template>

<script>
import {
  onBeforeMount,
  onMounted,
  onBeforeUpdate,
  onUpdated,
  onBeforeUnmount,
  onUnmounted,
  reactive,
  toRefs,
  ref,
} from "vue";
import ChildComposition from "./ChildComposition.vue";
export default {
  setup() {
    onBeforeMount(() => {
      console.log("onBeforeMount");
    });
    onMounted(() => {
      console.log("onMounted");
      inputRef.value.focus();
      inputRef.value.style.backgroundColor = "yellow";
    });
    onBeforeUpdate(() => {
      console.log("onBeforeUpdate");
    });
    onUpdated(() => {
      console.log("onUpdated");
    });
    onBeforeUnmount(() => {
      console.log("onBeforeUnmount");
    });
    onUnmounted(() => {
      console.log("onUnmounted");
    });

    const state = reactive({
      name: "Tablet",
      price: 100,
    });

    const inputRef = ref(null);
    return {
      ...toRefs(state),
      inputRef,
    };
  },
  components: {
    ChildComposition,
  },
  methods: {
    receiveFromChild() {
      console.log("receiveFromChild");
    },
  },
};
</script>

<style></style>
