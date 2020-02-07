import costCenterAPI from "../../api/costCenter";

export default {
  namespace: true,
  state: {
    costCenter: [],
    nameCostCenter: ""
  },
  getters: {
    getCostCenter(state) {
      return state.costCenter;
    }
  },
  mutations: {
    updateName(state, val) {
      state.nameCostCenter = val;
    },
    SAVE_COST_CENTER(state, costCenter) {
      state.costCenter = costCenter;
    }
  },
  actions: {
    async loadCostCenter({ commit }) {
      const response = await costCenterAPI.loadCostCenter();
      const costCenter = response.data;
      commit("SAVE_COST_CENTER", costCenter);
    },
    async saveCostCenter({ commit, state }) {
      const response = await costCenterAPI.saveCostCenter(state);
      const costCenter = response.data;
      commit("SAVE_COST_CENTER", costCenter);
    }
  }
};
