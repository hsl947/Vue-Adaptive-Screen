<!--
 * @Author: hsl
 * @Date: 2022-04-08 09:51:21
 * @LastEditTime: 2022-04-10 20:21:11
 * @FilePath: \vue-adaptive-screen\src\App.vue
-->
<template>
  <div id="app">
    <VAdaptiveScreen>
      <div class="bg" id="bg" />
    </VAdaptiveScreen>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {}
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
body{
  margin: 0;
  padding: 0;
}
.bg{
  /* width: 1920px;
  height: 1080px; */
  width: 100%;
  height: 100%;
  background: url(./assets/img.png) no-repeat;
  background-size: contain;
  overflow: hidden;
}
</style>
