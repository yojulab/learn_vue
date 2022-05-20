<template>
  <h3>Parent Componet</h3>
  <input type="text" v-model="message" ref="inputRef" />
  <button @click="inputRefMethod">input Ref</button>
  <hr />
  <Child v-if="showChild" ref="childRef" />
  <button @click="showChild = !showChild">show Child</button>
</template>

<script>
import Child from "./Child.vue";
export default {
  name: "Parent",
  data() {
    return {
      showChild: true,
      message: "Parent Message",
    };
  },
  methods: {
    inputRefMethod() {
      // console.log(this.$refs.inputRef, this);
      this.$refs.inputRef.value = "";
      this.$refs.inputRef.focus();
      this.$refs.inputRef.style.backgroundColor = "yellow";
      console.log(this.$refs.inputRef, "inputRef");

      this.$refs.childRef.sayMessage("This is Parent!");
      console.log(this.$refs.childRef, "childRef");
    },
  },
  components: {
    Child,
  },
};
</script>

<style></style>
