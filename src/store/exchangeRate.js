import moment from "moment";
import MyApi from "../../api/MyApi";

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
      MyApi.exchangeRate.testFunction();
      const response = await MyApi.exchangeRate.loadRates();
      const rates = response.data;
      commit("SAVE_RATES", rates);
    }
  }
};
