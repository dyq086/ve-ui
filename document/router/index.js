import Vue from "vue";
import Router from "vue-router";
import main from "../components/main";
import routeMap from "./router";
Vue.use(Router);
export default new Router({
  routes: [routeMap]
});
