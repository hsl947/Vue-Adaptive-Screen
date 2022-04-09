/*
 * @Author: hsl
 * @Date: 2022-04-08 09:53:57
 * @LastEditTime: 2022-04-09 16:15:59
 * @FilePath: \vue-adaptive-screen\src\index.js
 */
import AdaptiveScreen from "./components/AdaptiveScreen.vue";

export default {
  //Vue为vue的构造函数，options为可选配置项
  install(Vue, options){
    Vue.component(AdaptiveScreen.name, AdaptiveScreen);
  }
}
