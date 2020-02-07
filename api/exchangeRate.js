export default {
  loadRates: function(myApi) {
    const response = myApi.axios.get(myApi.server + "/exchange-rate");
    return response;
  }
};
