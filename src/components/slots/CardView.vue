<template>
  <!-- <h3 class="card">Card Template</h3> -->
  <div class="card">
    <slot>default text</slot>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.card {
  background: #9ec1e4;
  border-radius: 5px;
  padding: 20px;
  margin: 20px;
}
</style>
