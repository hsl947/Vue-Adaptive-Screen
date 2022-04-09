<!--
 * @Author: your name
 * @Date: 2022-04-08 09:54:45
 * @LastEditTime: 2022-04-09 18:01:06
 * @FilePath: \vue-adaptive-screen\src\components\AdaptiveScreen.vue
-->
<template>
  <section class="screen-box" :style="{ backgroundColor }">
    <div class="screen-wrapper" ref="screenWrapper">
      <slot />
    </div>
  </section>
</template>

<script>
  export default {
    name: 'VAdaptiveScreen',
    props: {
      width: {
        type: [String, Number],
        default: 1920
      },
      height: {
        type: [String, Number],
        default: 1920
      },
      fullScreen: {
        type: Boolean,
        default: false
      },
      backgroundColor: {
        type: String,
        default: '#000'
      },
      delay: {
        type: Number,
        default: 500
      },
      domId: {
        type: String,
        default: ''
      },
    },
    data() {
      return {}
    }
  };
</script>

<style scoped>
  .screen-box {
    width: 100vw;
    height: 100vh;
    overflow: hidden;
  }
  .screen-box .screen-wrapper {
    transition-property: all;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 500ms;
    position: relative;
    overflow: hidden;
    z-index: 100;
    transform-origin: left top;
  }
</style>
