<template>
  <div>
    <span>Rates Today</span>
    <ul>
      <li v-for="r in exchangeRateQueue" v-bind:key="r.CurrencyID">{{ r }}</li>
    </ul>
    <hr />
    <hr />
    <div>{{products}}</div>
    <hr />
    <div>{{saleProducts}}</div>
    <div>usuario</div>
    <v-btn v-on:click="loadUsers()">Get Users</v-btn>
    <div>{{getUsers}}</div>
    <hr />
    <hr />
    <div>rates</div>
    <div>{{getRates}}</div>
  </div>
</template>
<script>
import { mapState } from "vuex";
import { mapGetters } from "vuex";
import { mapActions } from "vuex";

export default {
  computed: {
    ...mapState(["products"]),
    ...mapGetters(["saleProducts", "getUsers", "getRates"])
  },
  data: () => ({
    exchangeRateQueue: []
  }),
  methods: {
    ...mapActions(["loadRates", "loadUsers"])
    // getExchangeRate() {
    //   return this.$http.get(this.$API + "/exchange-rate");
    // }
  },
  created() {
    setTimeout(() => {
      this.loadUsers();
      this.loadRates();
      // this.$store.dispatch("reducePrice", amount);
      // this.getExchangeRate()
      //   .then(er => (this.exchangeRateQueue = er.data.rates))
      //   .catch(error => console.log(error));
    }, 2000);
  }
};
</script>
<style lang="stylus"></style>
