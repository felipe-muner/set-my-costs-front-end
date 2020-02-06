import Vue from "vue";
import Vuex from "vuex";

import costCenter from "./costCenter";
import exchangeRate from "./exchangeRate";

Vue.use(Vuex);

export default new Vuex.Store({
  strict: true,
  state: { countRoot: 0 },
  getters: {
    getCount() {
      return this.state.countRoot;
    }
  },
  modules: {
    costCenter,
    exchangeRate
  }
});
