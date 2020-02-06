export default {
  namespace: true,
  state: {
    costCenter: [],
    nameCostCenter: "qwe"
  },
  getters: {
    getCostCenter(state) {
      return state.costCenter;
    }
  },
  mutations: {
    updateName(state, val) {
      state.costCenter.nameCostCenter = val;
    },
    SAVE_COST_CENTER(state, costCenter) {
      state.costCenter = costCenter;
    }
  },
  actions: {
    async loadCostCenter({ commit, rootState }) {
      console.log("printando o rootState index.js");
      console.log(rootState);
      console.log("printando o rootState index.js");
      const response = await this._vm.$http.get(this._vm.$API + "/cost-center");
      const costCenter = response.data;
      commit("SAVE_COST_CENTER", costCenter);
    },
    async saveCostCenter({ commit, state }) {
      const response = await this._vm.$http.post(
        this._vm.$API + "/cost-center/save",
        { Name: state.costCenter.nameCostCenter }
      );
      const costCenter = response.data;
      commit("SAVE_COST_CENTER", costCenter);
    }
  }
};
