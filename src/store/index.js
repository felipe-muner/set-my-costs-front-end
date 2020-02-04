import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    rates: ""
  },
  getters: {
    getRates: state => state.rates
  },
  mutations: {
    SAVE_RATES(state, rates) {
      state.rates = rates;
    }
  },
  actions: {
    async loadRates({ commit }) {
      const response = await this._vm.$http.get(
        this._vm.$API + "/exchange-rate"
      );
      const rates = await response.data;
      commit("SAVE_RATES", rates);
    }
  },
  modules: {}
});
