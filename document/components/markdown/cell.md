## Button

列表视图，内容常用的内容结构；

### 示例
#### 引入
```js
import { Cell } from 've-ui';

Vue.component(Cell.name, Cell);
```

#### 基本使用


```html
    <ve-cell-group>
        <ve-cell-item>
            <span slot="left">支付方式</span>
            <span slot="right">微信</span>
        </ve-cell-item>
        <ve-cell-item arrow>
            <span slot="left">项目资料</span>
        </ve-cell-item>
        <ve-cell-item>
            <span slot="left">卡号：</span>
            <input slot="right" type="number" placeholder="请输入VIP卡卡号" />
        </ve-cell-item>
    </ve-cell-group>
    <ve-cell-group>
        <ve-cell-item>
            <ve-icon slot="icon" name="phone"></ve-icon>
            <input slot="right" type="number" placeholder="请输入手机号码" />
        </ve-cell-item>
        <ve-cell-item>
            <ve-icon slot="icon" name="codev"></ve-icon>
            <input slot="left" type="number" placeholder="输入验证码" />
            <div slot="right" style="width: 6rem;">
              <ve-button type="primary" slot="right" size="medium">发送验证码</ve-button>
            </div>
        </ve-cell-item>
        <ve-cell-item arrow type="a" href="tel:13719477521">
            <ve-icon slot="icon" name="tel"></ve-icon>
            <span slot="left">我的电话</span>
            <span slot="right">13719477521</span>
        </ve-cell-item>
        <ve-cell-item arrow type="link" href="#">
            <ve-icon slot="icon" name="location"></ve-icon>
            <span slot="left">我的地址</span>
            <span slot="right">修改地址</span>
        </ve-cell-item>
        <ve-cell-item arrow type="a">
            <img slot="icon" class="icon" src="../assets/logo.png" />
            <span slot="left">我的图标</span>
            <span slot="right">可自定义图标</span>
        </ve-cell-item>
    </ve-cell-group>
```


### ve-cell-group 【slot】

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| - | - | - | - | - |
| - | - | - | - | - |




### ve-cell-item 【props】 
| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| - | - | - | - | - |
| type | 跳转类型 | String | link,a, label, div,  | div |
| href | 跳转地址 类型a,link 有效 | String | url | - |
| arrow | 箭头 | Boolean | true/false | false |


### ve-cell-item 【slot】
| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| - | - | - | - | - |
| left | 右边内容 | String/html | 内容  | - |
| right | 左边内容 | String/html | 内容  | - |
| icon | 图标 | String | - | - |
