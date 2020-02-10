import axios from "axios";

class CostCenter {
  constructor(server) {
    this.server = server;
    //   this.loadCostCenter = async () => axios.get(server + "/cost-center");
    //   this.saveCostCenter = async state =>
    //     axios.post(server + "/cost-center/save", {
    //       Name: state.nameCostCenter
    //     });
  }
  async loadCostCenter() {
    return axios.get(this.server + "/cost-center");
  }
  async saveCostCenter(state) {
    return axios.post(this.server + "/cost-center/save", {
      Name: state.nameCostCenter
    });
  }
}

export default CostCenter;
