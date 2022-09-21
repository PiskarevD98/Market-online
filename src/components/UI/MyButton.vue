<template>
  <button class="btn">
    <slot></slot>
  </button>
</template>
  
  <script>
export default {
  name: "my-button",
};
</script>
  
  <style scoped>
.btn {
  padding: 10px 15px;
  background: none;
  color: white;
  border: 1px solid white;
  border-radius: 4px;
}
.btn:hover {
  opacity: 0.75;
}
</style>