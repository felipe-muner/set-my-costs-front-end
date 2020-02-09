import ExchangeRate from "./ExchangeRate";
import CostCenter from "./CostCenter";
import config from "./config";

export default {
  costCenter: new CostCenter(config.server),
  exchangeRate: new ExchangeRate(config.server)
};
