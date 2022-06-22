import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { customDirective } from "@/globalRegister/index";
import { globalCusotmFun } from "@/utils/globalCusotmFun";
Vue.config.productionTip = false;

Vue.use(customDirective);
Vue.use(globalCusotmFun);
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
