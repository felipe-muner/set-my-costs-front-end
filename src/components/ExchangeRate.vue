<template>
  <div>
    <v-container>
      <v-row no-gutters>
        <v-col></v-col>
        <v-col>
          <v-alert color="#2A3B4D" dark icon="mdi-money">
            Rates Day:
            {{ getRateDay }}
          </v-alert>
        </v-col>
        <v-col></v-col>
      </v-row>
    </v-container>

    <br />
    <v-container>
      <v-row no-gutters>
        <v-col></v-col>
        <v-col>
          <v-card outlined tile class="ma-3">
            <v-data-table
              dense
              dark
              :headers="headers"
              :items="getRates"
              hide-default-footer
              class="elevation-10"
            ></v-data-table>
          </v-card>
        </v-col>
        <v-col></v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import { mapActions } from "vuex";

export default {
  data: () => ({
    headers: [
      {
        text: "Curreny Name",
        align: "left",
        sortable: false,
        value: "CurrencyName"
      },
      { text: "Rate", value: "Rate" }
    ]
  }),
  computed: {
    ...mapGetters(["getRates", "getRateDay"])
  },
  methods: {
    ...mapActions(["loadRates"])
  },
  created() {
    this.loadRates();
  }
};
</script>
<style lang="stylus"></style>
