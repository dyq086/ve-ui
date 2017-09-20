import Vue from "vue";
import Router from "vue-router";
import Button from "../components/Button";
import Cell from "../components/Cell";

import Index from "../components/Index";
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
    }
  ]
});
