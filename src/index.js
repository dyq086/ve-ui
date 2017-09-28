import { Button } from './components/button';
import { Cell,CellGroup } from './components/cell';
import { Switch } from './components/switch';
import { Checkbox,CheckboxGroup } from './components/checkbox';
import { Radio,RadioGroup } from './components/radio';
import { Grids,GridsGroup } from './components/grids';
import { Toast } from './components/toast';

import rem from "./plug-in/rem";

const version = '1.0.9';
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
  Vue.component(Toast.name, Toast);
};

// auto install
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
};

export default {
  install,
  version
};
