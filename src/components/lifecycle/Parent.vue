<template>
  <h3>Parent Componet</h3>
  <Child v-if="showChild" />
  <button @click="showChild = !showChild">show Child</button>
</template>

<script>
import Child from "./Child.vue";
export default {
  name: "Parent",
  data() {
    return {
      showChild: true,
    };
  },
  components: {
    Child,
  },
  beforeCreate() {
    console.log("Parent beforeCreate");
  },
  created() {
    console.log("Parent created");
  },
  beforeMount() {
    console.log("Parent beforeMount");
  },
  mounted() {
    console.log("Parent mounted");
  },
  beforeUpdate() {
    console.log("Parent beforeUpdate");
  },
  updated() {
    console.log("Parent updated");
  },
  unmounted() {
    console.log("Parent unmounted");
  },
  beforeUnmount() {
    console.log("Parent beforeUnmount");
  },
};
</script>

<style></style>
