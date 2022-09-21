<template>
  <div class="navbar">
    <my-button @click="$router.push('/')">Main</my-button>
    <div class="navbar__btns"></div>
    <my-button @click="$router.push('/about')" style="margin-left: 20px"
      >About</my-button
    >
    <my-button @click="$router.push('/enter')" style="margin-left: 20px"
      >Sign In</my-button
    >
  </div>
</template>

<script>
import MyButton from "@/components/UI/MyButton";
export default {
  components: {
    MyButton,
  },
};
</script>

<style  scoped>
.navbar {
  font-family: "Gill Sans", sans-serif;
  height: 50px;
  background-color: rgb(6, 146, 177);
  box-shadow: 2px 2px 4px gray;
  display: flex;
  align-items: center;
  padding: 0 15px;
  color: white;
}

.navbar__btns {
  margin-left: auto;
}
</style>