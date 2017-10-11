/*
* @Author: yongqing
* @Date:   2017-09-16 23:47:06
* @Last Modified by:   yongqing
* @Last Modified time: 2017-09-16 23:48:18
*/

"use strict";
import Vue from "vue";
import AlertComponents from "./src/alert.vue";
import { pageScroll, isColor } from "../../plug-in/utils";

const AlertConstructor = Vue.extend(AlertComponents);
const instance = new AlertConstructor({
  el: document.createElement("div")
});

AlertConstructor.prototype.closeAlert = function(flag) {
  if (flag !== undefined) {
    flag ? instance.ok && instance.ok() : instance.cancel && instance.cancel();
  }
  const el = instance.$el;
  el.parentNode && el.parentNode.removeChild(el);
  pageScroll.unlock();
};

const Alert = (options = {} || "") => {
  instance.type = options.type || "";
  instance.title = options.title || "";
  instance.content = options.content || "";
  instance.okTxt = options.okTxt || "确认";
  instance.cancelTxt = options.cancanlTxt || "取消";
  instance.okColor = isColor(options.okColor) && options.okColor;
  instance.cancelColor = isColor(options.cancelColor) && options.cancelColor;

  instance.ok = options.ok;
  instance.cancel = options.cancel;
  if (typeof options == "string") {
    instance.content = options || "";
  }
  document.body.appendChild(instance.$el);
  pageScroll.lock();
};

export default Alert;
