import axios from "axios";

class ExchangeRate {
  constructor(server) {
    this.loadRates = async () => axios.get(server + "/exchange-rate");
  }
  testFunction() {
    console.log(this);
  }
}

export default ExchangeRate;
