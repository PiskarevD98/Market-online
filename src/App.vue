<template>
  <navbar></navbar>
  <router-view></router-view>
  <Bottombar></Bottombar>
</template>

<script>
import Navbar from "@/components/UI/Navbar";
import Bottombar from "@/components/UI/Bottombar"
export default {
  components: {
    Navbar,
    Bottombar,
  },
};
</script>

<style>
#app {
  margin: 0;
  padding: 0; 
  display: flex;
  flex-direction: column;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
::-webkit-scrollbar {
  width: 0;
}
</style>
