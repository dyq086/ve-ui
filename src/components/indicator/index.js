/*
 * @Author: yongqing
 * @Date:   2017-09-16 23:47:06
 * @Last Modified by:   yongqing
 * @Last Modified time: 2017-10-10 11:09:29
 */

"use strict";
import Vue from "vue";
import IndicatorComponents from "./src/indicator.vue";
import { pageScroll } from "../../plug-in/utils";

const IndicatorConstructor = Vue.extend(IndicatorComponents);
const instance = new IndicatorConstructor({
  el: document.createElement("div")
});

const Indicator = () => {};

Indicator.prototype.open = function(mes) {
  instance.mes = mes || "";
  document.body.appendChild(instance.$el);
  pageScroll.lock();
}

Indicator.prototype.close = function() {
  const el = instance.$el;
  el.parentNode && el.parentNode.removeChild(el);
  pageScroll.unlock();
}

export default new Indicator;
