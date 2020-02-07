import myApi from "./myApi";

export default {
  loadCostCenter: function() {
    const response = myApi.axios.get(myApi.server + "/cost-center");
    return response;
  },
  saveCostCenter: function(state) {
    const response = myApi.axios.post(myApi.server + "/cost-center/save", {
      Name: state.nameCostCenter
    });
    return response;
  }
};
