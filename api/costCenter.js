import axios from "axios";

class CostCenter {
  constructor(server) {
    this.loadCostCenter = async () => axios.get(server + "/cost-center");
    this.saveCostCenter = async state =>
      axios.post(server + "/cost-center/save", {
        Name: state.nameCostCenter
      });
  }
}

export default CostCenter;
