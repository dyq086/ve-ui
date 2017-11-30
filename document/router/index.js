import Vue from "vue";
import Router from "vue-router";
import main from "../components/main";
import introduce from "../components/markdown/introduce.md";

Vue.use(Router);
export default new Router({
  routes: [{
    path: "/",
    name: "index",
    component: main,
    children: [
      { path: '/', component: introduce },
    ]
  }]
});
