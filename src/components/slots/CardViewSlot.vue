<template>
  <div class="card">
    <div class="card-header">
      <slot name="header">Header</slot>
    </div>
    <div class="card-body">
      <slot name="body">Body</slot>
    </div>
    <div class="card-footer">
      <slot name="footer">Footer</slot>
    </div>
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
.card-header {
  margin: 2px;
  background: #c6f2c9;
}
.card-body {
  background: #c6f2c9;
  margin: 2px;
}
.card-footer {
  background: #c6f2c9;
  margin: 2px;
}
</style>
