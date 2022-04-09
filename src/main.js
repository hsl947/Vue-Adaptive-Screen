/*
 * @Author: hsl
 * @Date: 2022-04-08 09:51:21
 * @LastEditTime: 2022-04-09 16:44:19
 * @FilePath: \vue-adaptive-screen-npm\src\main.js
 */
import Vue from 'vue'
import App from './App.vue'

//引入组件使用Vue.use时候会自动执行install方法，从而挂载了组件到Vue构造函数上
import VAdaptiveScreen from './index.js'
Vue.use(VAdaptiveScreen)

new Vue({
  el: '#app',
  render: h => h(App)
})
