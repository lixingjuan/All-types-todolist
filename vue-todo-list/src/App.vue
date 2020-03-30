<!--
 * @version: 0.0.1
 * @Author: lixingjuan <xingjuan.li@hand-china.com>
 * @Date: 2020-02-05 20:41:02
 * @copyright: Copyright (c) 2019, Hand
 -->
<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
// import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "app",
  components: {
    // HelloWorld
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
