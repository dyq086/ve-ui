/*
 * @Author: yongqing.deng 
 * @Date: 2017-09-20 19:14:17 
 * @Last Modified by:   yongqing
 * @Last Modified time: 2017-10-10 10:18:29
 */
import Vue from "vue";
import Router from "vue-router";
import Index from "../components/Index";
import Button from "../components/Button";
import Cell from "../components/Cell";
import Switch from "../components/Switch";
import Checkbox from "../components/Checkbox";
import Radio from "../components/Radio";
import Grids from "../components/Grids";
import Toast from "../components/Toast";
import Alert from "../components/Alert";
import Indicator from "../components/Indicator";
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "index",
      component: Index
    },
    {
      path: "/button",
      name: "button",
      component: Button
    },
    {
      path: "/cell",
      name: "cell",
      component: Cell
    },
    {
      path: "/switch",
      name: "switch",
      component: Switch
    },
    {
      path: "/checkbox",
      name: "checkbox",
      component: Checkbox
    },
    {
      path: "/radio",
      name: "radio",
      component: Radio
    },
    {
      path: "/grids",
      name: "grids",
      component: Grids
    },
    {
      path: "/toast",
      name: "toast",
      component: Toast
    },
    {
      path: "/indicator",
      name: "indicator",
      component: Indicator
    },
    {
      path: "/alert",
      name: "alert",
      component: Alert
    }
  ]
});
