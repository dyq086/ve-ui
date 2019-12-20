## Button

按钮，提供了各种类型、样子、状态

### 示例
#### 引入
```js
import { Button } from 've-ui';

Vue.component(Button.name, Button);
```
按钮类型
```html
  <ve-button>default</ve-button>
  <ve-button type="primary">primary</ve-button>
  <ve-button type="danger">danger</ve-button>

```

按钮大小，默认lg

```html
  <ve-button size="large">large</ve-button>
  <ve-button size="medium">medium</ve-button>
  <ve-button size="small">small</ve-button>
```

是否圆角
```html
  <ve-button shape="circle" type="primary" >圆角</ve-button>
```


不可点击状态
```html
  <ve-button disabled>disable</ve-button>
```


自定义颜色
```html
  <ve-button  bgcolor="#44b549" color="#fff" >自定义颜色</ve-button>
```

绑定 click 事件
```html
  <ve-button  @click.native="handleClick">点击我</ve-button>

```

说明：组件点击事件统一使用click.native

### Props 配置

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| - | - | - | - | - |
| type | 按钮类型 | String | default,primary,danger | default |
| disabled | 禁用状态 | Boolean | true/false | false |
| size | 按钮大小 | String | large,medium,small | large |
| shape | 是否为圆角 | String | circle | - |
| bgcolor | 背景颜色 | String | 颜色值 | - |
| color | 按钮字体颜色 | String | 颜色值 | - |
