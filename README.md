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
import VAdaptiveScreen from 'v-scale-screen'
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
