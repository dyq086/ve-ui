## Button

按钮，提供了各种类型、样子、状态

### 示例
#### 引入
```js
import { Button } from 'etc-ui';

Vue.component(Button.name, Button);
```
按钮类型
```html
  <etc-button>default</etc-button>
  <etc-button type="primary">primary</etc-button>
  <etc-button type="danger">danger</etc-button>

```

按钮大小，默认lg

```html
  <etc-button size="large">large</etc-button>
  <etc-button size="medium">medium</etc-button>
  <etc-button size="small">small</etc-button>
```

是否圆角
```html
  <etc-button shape="circle" type="primary" >圆角</etc-button>
```


不可点击状态
```html
  <etc-button disabled>disable</etc-button>
```


自定义颜色
```html
  <etc-button  bgcolor="#44b549" color="#fff" >自定义颜色</etc-button>
```

绑定 click 事件
```html
  <etc-button  @click.native="handleClick">点击我</etc-button>

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
