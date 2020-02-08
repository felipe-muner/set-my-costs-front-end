import moment from "moment";
import axios from "axios";
import exchangeRate from "./exchangeRate";
import costCenter from "./costCenter";
import config from "./config";

function myApi() {
  this.server = config.server;
  this.axios = axios;
  this.moment = moment;
  this.costCenter = costCenter;
  this.exchangeRate = exchangeRate;
}

export default new myApi();
