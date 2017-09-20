import rem from "./plug-in/rem";
import { Button } from "./components/button";
import { Cell } from "./components/cell";
const install = function(Vue) {
  Vue.component(Button.name, Button);
  Vue.component(Cell.name, Cell);
};

if (typeof window !== "undefined" && window.Vue) {
  install(window.Vue);
}

export default {
  install
};
