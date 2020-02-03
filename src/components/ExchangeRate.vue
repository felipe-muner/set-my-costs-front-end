<template>
  <div>sou o component exchange rate</div>
</template>
<script>
export default {
  data: () => ({
    exchangeRateQueue: []
  }),
  methods: {
    getExchangeRate() {
      return this.$http.get(this.$API + "/exchange-rate");
    }
  },

  created() {
    this.getExchangeRate()
      .then(er => {
        console.log("sem prob");

        this.exchangeRateQueue = er.data.exchangeRateQueue;
      })
      .catch(error => {
        console.log("entrei erro");
        console.log(error);
      });
  }
};
</script>
<style lang="stylus"></style>
