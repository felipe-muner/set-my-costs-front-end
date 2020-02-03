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
      this.$http.get(this.$API + "/exchange-rate");
    }
  },

  created() {
    this.getExchangeRate()
      .then(er => {
        this.exchangeRateQueue = er.data.exchangeRateQueue;
      })
      .catch(error => console.log(error));
  }
};
</script>
<style lang="stylus"></style>
