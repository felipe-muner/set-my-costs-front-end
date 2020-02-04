<template>
  <div>
    <span>Rates Today</span>
    <ul>
      <li v-for="r in getRates" v-bind:key="r.CurrencyID">{{ r }}</li>
    </ul>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import { mapActions } from "vuex";

export default {
  computed: {
    ...mapGetters(["getRates"])
  },
  data: () => ({}),
  methods: {
    ...mapActions(["loadRates", "loadUsers"])
  },
  created() {
    this.loadRates();
  }
};
</script>
<style lang="stylus"></style>
