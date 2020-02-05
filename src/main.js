import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import axios from "axios";
import moment from "moment";
import "material-design-icons-iconfont/dist/material-design-icons.css";

Vue.config.productionTip = false;

Vue.prototype.$API = "http://localhost:3000";
Vue.prototype.$http = axios;
Vue.prototype.$moment = moment;

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount("#app");
