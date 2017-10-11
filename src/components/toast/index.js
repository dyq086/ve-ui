/*
* @Author: yongqing
* @Date:   2017-09-16 23:47:06
* @Last Modified by:   yongqing
* @Last Modified time: 2017-09-16 23:48:18
*/

"use strict";
import Vue from "vue";
import ToastComponents from "./src/toast.vue";
import { pageScroll } from "../../plug-in/utils";

const ToastConstructor = Vue.extend(ToastComponents);
const instance = new ToastConstructor({
  el: document.createElement("div")
});

ToastConstructor.prototype.closeToast = function() {
  const el = instance.$el;
  el.parentNode && el.parentNode.removeChild(el);
  pageScroll.unlock();
};

const Toast = (options = {} || "") => {
  instance.mes = options.mes || "";
  instance.type = options.type || "";
  instance.timeout = ~~options.timeout || 2000;
  if (typeof options === "string") {
    instance.mes = options || "";
  }
  document.body.appendChild(instance.$el);
  pageScroll.lock();
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
      instance.closeToast();
    }, instance.timeout + 100);
  });
};

export default Toast;
