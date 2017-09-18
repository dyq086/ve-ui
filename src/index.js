
import rem from './plug-in/rem';
import {Button} from './components/button';
const install = function (Vue) {
    Vue.component(Button.name, Button);
};

if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
}

export default {
    install
};
