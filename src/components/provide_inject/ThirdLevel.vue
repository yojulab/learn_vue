<template>
  <div>
    <h4>Third Level : inject value {{ message }}</h4>
    <input type="text" v-model="message" />
  </div>
</template>

<script>
export default {
  name: "ThirdLevel",
  inject: ["message"],
};
</script>

<style></style>
