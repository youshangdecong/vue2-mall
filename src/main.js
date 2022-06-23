import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { customDirective } from "@/globalRegister/index";
import { globalCusotmFun } from "@/utils/globalCusotmFun";
import VueLazyload from "vue-lazyload";

// or with options

Vue.config.productionTip = false;

Vue.use(customDirective);
Vue.use(globalCusotmFun);
// 图片懒加载

Vue.use(VueLazyload, {
  preLoad: 1,
  loading: require("./assets/img/common/placeholder.png"),
  attempt: 1,
});
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
