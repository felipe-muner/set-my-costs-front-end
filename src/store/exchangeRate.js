import moment from "moment";

export default {
  namespace: true,
  state: {
    rates: [{}]
  },
  getters: {
    getRates(state) {
      return state.rates;
    },
    getRateDay(state) {
      return moment(state.rates[0].RegisterDate).format("YYYY-MM-DD");
    }
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
      const rates = response.data;
      commit("SAVE_RATES", rates);
    }
  }
};
