<template>
  <div>
    <h4>Third Level : inject value {{ message }}</h4>
  </div>
</template>

<script>
export default {
  name: "ThirdLevel",
  inject: ["message"],
};
</script>

<style></style>
