export default {
  loadRates: myApi => myApi.axios.get(myApi.server + "/exchange-rate")
};
