import myApi from "./myApi";

export default {
  loadCostCenter: () => myApi.axios.get(myApi.server + "/cost-center"),
  saveCostCenter: state =>
    myApi.axios.post(myApi.server + "/cost-center/save", {
      Name: state.nameCostCenter
    })
};
