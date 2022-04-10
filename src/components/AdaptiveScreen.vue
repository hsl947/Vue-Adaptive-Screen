<!--
 * @Author: your name
 * @Date: 2022-04-08 09:54:45
 * @LastEditTime: 2022-04-10 20:21:55
 * @FilePath: \vue-adaptive-screen\src\components\AdaptiveScreen.vue
-->
<template>
  <section class="screen-box" ref="screenBox" :style="{ backgroundColor }">
    <div class="screen-wrapper" ref="screenWrapper">
      <slot />
    </div>
  </section>
</template>

<script>

export default {
  name: 'VAdaptiveScreen',
  props: {
    // 设计稿宽度
    width: {
      type: [String, Number],
      default: 1920
    },
    // 设计稿高度
    height: {
      type: [String, Number],
      default: 1080
    },
    // 是否全屏拉伸缩放（会存在拉伸变形）
    fullScreen: {
      type: Boolean,
      default: false
    },
    // 固定比例缩放后，空白部分的背景色
    backgroundColor: {
      type: String,
      default: '#000'
    },
    // 缩放延迟
    delay: {
      type: [Number, String],
      default: 300
    },
    // 缩放容器的id, 比如嵌套在页面内的大屏（该字段功能开发中）
    domId: {
      type: String,
      default: ''
    },
  },
  data() {
    return {}
  },
  mounted() {
    this.$nextTick(()=>{
      this.initScale()
      window.addEventListener('resize', this.debounce(this.initScale, this.delay))
    })
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.debounce(this.initScale, this.delay))
  },
  methods: {
    debounce(func, delay) {
      let timeout = null
      let context = this;
      return function () {
        let args = arguments;
        if (timeout) {
          clearTimeout(timeout)
        }
        timeout = setTimeout(() => {
          func.apply(context, args)
        }, delay)
      }
    },
    autoPosition(scale) {
      // 固定比例后，需要调整容器的水平和垂直居中位置
      const box = this.$refs.screenBox
      const wrapper = this.$refs.screenWrapper

      const { clientWidth: boxW, clientHeight: boxH } = box
      const { clientWidth: wrapperW, clientHeight: wrapperH } = wrapper

      const mx = Math.max((boxW - wrapperW * scale) / 2, 0)
      const my = Math.max((boxH - wrapperH * scale) / 2, 0)

      Object.assign(wrapper.style, {
        margin: `${my}px ${mx}px`,
        transform: `scale(${scale}, ${scale})`
      })
    },
    initScale() {
      const dom = this.domId ? document.getElementById(this.domId) : document.body
      const wrapper = this.$refs.screenWrapper
      const { clientWidth, clientHeight } = dom

      const rateX = clientWidth / this.width
      const rateY = clientHeight / this.height

      Object.assign(wrapper.style, {
        width:`${this.width}px`,
        height:`${this.height}px`,
      })

      // 全屏拉伸缩放
      if(this.fullScreen) {
        Object.assign(wrapper.style, {
          transform: `scale(${rateX}, ${rateY})`
        })
        return false
      }

      //按照宽高最小比例进行缩放
      const minRate = Math.min(rateX, rateY)
      // 固定比例缩放，需要调整位置居中
      this.autoPosition(minRate)
    }
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
