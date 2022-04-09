<!--
 * @Author: hsl
 * @Date: 2022-04-08 09:51:21
 * @LastEditTime: 2022-04-09 17:51:30
 * @FilePath: \vue-adaptive-screen\src\App.vue
-->
<template>
  <div id="app">
    <VAdaptiveScreen>
      <img src="./assets/logo.png">
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
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
