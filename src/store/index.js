import Vue from "vue";
import Vuex from "vuex";

import costCenter from "./costCenter";
import exchangeRate from "./exchangeRate";

Vue.use(Vuex);

export default new Vuex.Store({
  strict: true,
  modules: {
    costCenter,
    exchangeRate
  }
});
