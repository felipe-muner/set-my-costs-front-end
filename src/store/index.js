import Vue from "vue";
import Vuex from "vuex";
import moment from "moment";

Vue.use(Vuex);

export default new Vuex.Store({
  strict: true,
  state: {
    rates: [{}],
    costCenter: [],
    obj: { message: "" },
    nameCostCenter: ""
  },
  getters: {
    getRates(state) {
      return state.rates;
    },
    getRateDay(state) {
      return moment(state.rates[0].RegisterDate).format("YYYY-MM-DD");
    },
    getCostCenter(state) {
      return state.costCenter;
    }
  },
  mutations: {
    updateName(state, val) {
      state.nameCostCenter = val;
    },
    SAVE_RATES(state, rates) {
      state.rates = rates;
    },
    SAVE_COST_CENTER(state, costCenter) {
      state.costCenter = costCenter;
    }
  },
  actions: {
    async loadRates({ commit }) {
      const response = await this._vm.$http.get(
        this._vm.$API + "/exchange-rate"
      );
      const rates = response.data;
      commit("SAVE_RATES", rates);
    },
    async loadCostCenter({ commit }) {
      const response = await this._vm.$http.get(this._vm.$API + "/cost-center");
      const costCenter = response.data;
      commit("SAVE_COST_CENTER", costCenter);
    },
    async saveCostCenter({ commit, state }) {
      const response = await this._vm.$http.post(
        this._vm.$API + "/cost-center/save",
        { Name: state.nameCostCenter }
      );
      const costCenter = response.data;
      commit("SAVE_COST_CENTER", costCenter);
    }
  },
  modules: {}
});
