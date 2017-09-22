import rem from "./plug-in/rem";
import { Button } from "./components/button";
import { CellBlock, CellItem } from "./components/cell";
import { Switch } from "./components/switch";
const install = function(Vue) {
  Vue.component(Button.name, Button);
  Vue.component(CellItem.name, CellItem);
  Vue.component(CellBlock.name, CellBlock);
  Vue.component(Switch.name, Switch);
};

if (typeof window !== "undefined" && window.Vue) {
  install(window.Vue);
}

export default {
  install
};
