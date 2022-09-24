<template>
  <div class="bottomBar">
    <div class="bottom-item">
    <img
      class="img"
      src="@/components/pictures/Vector-Email-Icon-Transparent.png"
    /><p class="text">Email: piskar98@mail.ru</p>
    </div>
    <div class="bottom-item">
        <img src="@/components/pictures/322-3229884_png-file-telephone-icon-clipart.png" class="img"  />
        <p class="text">+7-927-704-9690</p>
    </div>
    <div >
    <a href="https://github.com/PiskarevD98?tab=repositories" class="github">
      <img src="@/components/pictures/GitHub-Mark-Light-32px.png"
    /><p class="text">PiskarevD98</p></a>
</div>
  </div>
</template>

<script>
export default {};
</script>

<style  scoped>
.bottomBar {
  display: flex;
  left: 0;
  bottom: 0;
  right: 0;
  height: 55px;
  background-color: rgb(6, 146, 177);
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: space-around;
}
.github {
  text-decoration: none;
  display: flex;
  align-items: center;
}
.img {
  width: 25px;
  height: 25px;
}
.bottom-item {
    display:flex;
}
.gitHub-container {
    color:black;
    text-decoration: none;
}

.text {
    margin-left:0.5em;
    color:white;
    
}

</style>