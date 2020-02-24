<template>
  <div class="login_bg">
  </div>
</template>

<script>
  export default {
    name: "home",
    data() {
      return {
        activeName: '1',
        app_name: 'Teman-Cash',
        text: `A dog is a type of domesticated animal.Known for its loyalty and faithfulness,it can be found as a welcome guest in many households across the world.`,
      };
    }
  }
</script>

<style scoped>
  .login_bg {
    width: 100%;
    height: 100%;
    margin: 0 auto;
    padding: 0;
    background-image: url(../assets/home_logo.jpg);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    position:absolute;
  }
</style>
