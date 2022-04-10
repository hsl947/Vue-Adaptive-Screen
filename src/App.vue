<!--
 * @Author: hsl
 * @Date: 2022-04-08 09:51:21
 * @LastEditTime: 2022-04-10 18:27:18
 * @FilePath: \vue-adaptive-screen\src\App.vue
-->
<template>
  <div id="app">
      <VAdaptiveScreen>
        <div class="flex">
          <!-- <div style="width: 400px;"></div> -->
          <div class="bg" id="bg">
            <div class="aaa" v-for="i in 20" :key="i">test</div>
          </div>
        </div>
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
.flex{
  display: flex;
  width: 100%;
  height: 100%;
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
.aaa{
  width: 500px;
  height: 200px;
}
</style>
