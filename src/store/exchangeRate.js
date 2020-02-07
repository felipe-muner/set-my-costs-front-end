import myApi from "../../api/myApi";

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
      return myApi.moment(state.rates[0].RegisterDate).format("YYYY-MM-DD");
    }
  },
  mutations: {
    SAVE_RATES(state, rates) {
      state.rates = rates;
    }
  },
  actions: {
    async loadRates({ commit }) {
      const response = await myApi.exchangeRate.loadRates(myApi);
      const rates = response.data;
      commit("SAVE_RATES", rates);
    }
  }
};
