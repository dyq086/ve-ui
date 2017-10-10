import rem from "./plug-in/rem";
import { Button } from "./components/button";
import { Cell, CellGroup } from "./components/cell";
import { Switch } from "./components/switch";
import { Checkbox, CheckboxGroup } from "./components/checkbox";
import { Radio, RadioGroup } from "./components/radio";
import { Grids, GridsGroup } from "./components/grids";
import  Toast  from "./components/toast";
import  Indicator  from "./components/indicator";
const version = "1.0.9";
const install = function(Vue, config = {}) {
  if (install.installed) return;
  Vue.component(Button.name, Button);
  Vue.component(Cell.name, Cell);
  Vue.component(CellGroup.name, CellGroup);
  Vue.component(Switch.name, Switch);
  Vue.component(Checkbox.name, Checkbox);
  Vue.component(CheckboxGroup.name, CheckboxGroup);
  Vue.component(Radio.name, Radio);
  Vue.component(RadioGroup.name, RadioGroup);
  Vue.component(Grids.name, Grids);
  Vue.component(GridsGroup.name, GridsGroup);
  Vue.prototype.$dialog = {
    toast: Toast,
    indicator:Indicator
  };
};
//移动端ios:active伪类失效的兼容解决：
document.body.addEventListener("touchstart", function() {}); //空函数即可
// auto install
if (typeof window !== "undefined" && window.Vue) {
  install(window.Vue);
}

export default {
  install,
  version
};
