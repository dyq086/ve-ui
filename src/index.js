import rem from "./plug-in/rem";
import { Base } from "./components/base";
import { Button } from "./components/button";
import { Cell, CellGroup } from "./components/cell";
import { Switch } from "./components/switch";
import { Checkbox, CheckboxGroup } from "./components/checkbox";
import { Radio, RadioGroup } from "./components/radio";
import { Grids, GridsGroup } from "./components/grids";
import { Tab, TabPanel } from "./components/tab";
import { Picker } from "./components/picker";
import { DateTimePicker } from "./components/datetime-picker";
import { ActionSheet } from "./components/actionsheet";
import { Vscroll } from "./components/vscroll";
import { Swiper, SwiperItem } from "./components/swiper";
import Toast from "./components/toast";
import Alert from "./components/alert";
import Indicator from "./components/indicator";
const install = function(Vue, config = {}) {
  if (install.installed) return;
  Vue.component(Base.name, Base);
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
  Vue.component(Tab.name, Tab);
  Vue.component(TabPanel.name, TabPanel);
  Vue.component(Picker.name, Picker);
  Vue.component(DateTimePicker.name, DateTimePicker);
  Vue.component(ActionSheet.name, ActionSheet);
  Vue.component(Vscroll.name, Vscroll);
  Vue.component(Swiper.name, Swiper);
  Vue.component(SwiperItem.name, SwiperItem);
  Vue.prototype.$dialog = {
    toast: Toast,
    indicator: Indicator,
    alert: Alert
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
  Base,
  Toast,
  Indicator,
  Alert,
  Button,
  Cell,
  CellGroup,
  Switch,
  Checkbox,
  CheckboxGroup,
  Radio,
  RadioGroup,
  Grids,
  GridsGroup,
  Tab,
  TabPanel,
  Picker,
  DateTimePicker,
  ActionSheet,
  Vscroll,
  Swiper,
  SwiperItem
};
