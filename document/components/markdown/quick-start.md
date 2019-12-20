## 快速上手

### 使用 vue-cli

首先安装vue-cli 脚手架，详情可以参考vue 文档 <a href="https://cn.vuejs.org/v2/guide/installation.html">vue</a>

```shell
$ npm install -g vue-cli

$ vue init webpack projectname
```



### 安装

#### NPM

```shell
$ npm install vue-ve-ui --save-dev
```
### 引入组件（2种方式）
#### 全局引入
在 main.js 中写入以下内容：

```js
import Vue from 'vue'
import veui from 'vue-ve-ui'
import 'vue-ve-ui/lib/ve-ui.css'
import App from './App.vue'

Vue.use(veui)

new Vue({
  el: '#app',
  components: { App }
})
```
#### 按需引入
借助 <a href="https://github.com/ve-ui/babel-plugin-component">babel-plugin-component</a>，我们可以只引入需要的组件，以达到减小项目体积的目的。
首先，安装 babel-plugin-component：
```shell
 $ npm install babel-plugin-component --save-dev

```
然后，将 .babelrc 中的 plugins 修改为：

```js
"plugins": [
      ["component", [

          {
              "libraryName": "vue-ve-ui",
              "styleLibraryName": "styles"

          }
      ]]
    ]
```

然后再文件中是这样取引入：

```js
import Vue from "vue";
import '../../lib/rem';
import { Base,Button, } from 'vue-ve-ui';
Vue.component(Button.name, Button);
new Vue({
    el: "#app",
    render: xx => xx(index)
});
```
其中Base是基础样式,css 单位为rem 此处默认单位20px=1rem 默认比例尺寸iphone6分辨率

```js
  import { Base,Button} from 'vue-ve-ui';

  //等价于：
  require('components/lib/styles/base.css')
  var button = require('components/lib/button')
  require('components/lib/styles/button.css')
```


引入rem 代码：

**注意：** 按需引入的话是不会将rem 自适应方法打包进去的，需要手动引入 rem js 代码，一般在main.js 引入，或script 方式插入,代码
```js
  (function(doc, win) {
    var docEl = doc.documentElement,
        resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
        recalc = function() {
            var clientWidth = docEl.clientWidth;
            if (!clientWidth) return;
            docEl.style.fontSize = 20 * (clientWidth / 375) + 'px';
        };
    if (!doc.addEventListener) return;
    win.addEventListener(resizeEvt, recalc, false);
    doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);
```

此处默认单位20px=1rem 默认比例尺寸iphone6分辨率

#### CDN

```html

<!DOCTYPE html>
<html>

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,user-scalable=no,initial-scale=1,maximum-scale=1,minimum-scale=1">
  <title>vue-ve-ui</title>
  <link rel="stylesheet" href="https://unpkg.com/vue-ve-ui/lib/ve-ui.css">
</head>

<body>
  <div id="app"></div>
</body>
  <script src="https://cdn.jsdelivr.net/npm/vue"></script>
  <script src="https://unpkg.com/vue-ve-ui/lib/ve-ui.js"></script>
</html>

```