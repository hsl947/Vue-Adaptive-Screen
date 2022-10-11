<!--
 * @Author: hsl947 1506070803@qq.com
 * @Date: 2022-04-09 17:50:03
 * @LastEditors: hsl947 1506070803@qq.com
 * @LastEditTime: 2022-10-11 17:22:20
 * @FilePath: \vue-adaptive-screen-npm\README.md
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
## Vue-Adaptive-Screen

大屏自适应容器组件，可用于大屏项目开发，实现屏幕自适应

### 安装

```bash
npm install vue-adaptive-screen --save
# or
yarn add vue-adaptive-screen
```

### 引入

```js
// main.js
import VAdaptiveScreen from 'vue-adaptive-screen'
Vue.use(VAdaptiveScreen)
```

### 使用

```vue
<v-adaptive-screen>
  <div>
    <e-charts>....</e-charts>
    <e-charts>....</e-charts>
  </div>
</v-adaptive-screen>
```


### API

| 属性        | 说明                                                                  | 类型              | 默认值                      |
|-----------|---------------------------------------------------------------------|-----------------|--------------------------|
| width     | 大屏宽度                                                                | Number \| String         | 1920 |
| height   | 大屏高度                                                     | Number \| String | 1080 |
| backgroundColor | 固定比例自适应时，空白部分的背景色 | String | #000                     |
| delay     | 窗口缩放的防抖延迟时间                                                          | Number \| String          | 300                      |
| fullScreen | 全屏自适应，启用此配置项时会存在拉伸变形效果 | Boolean | false |
