<!--
 * @Author: your name
 * @Date: 2022-04-08 09:54:45
 * @LastEditTime: 2022-04-09 15:51:50
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
      backgroundColor: {
        type: String,
        default: '#000'
      }
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
