<template>
  <navbar></navbar>
  <router-view></router-view>
</template>

<script>
import Navbar from "@/components/UI/Navbar";
export default {
  components: {
    Navbar,
  },
};
</script>

<style>
#app {
  margin: 0;
  padding: 0;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
