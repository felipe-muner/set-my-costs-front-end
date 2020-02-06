<template>
  <div>
    <ul>
      <li v-for="c in getCostCenter" v-bind:key="c.CostCenterID">{{ c }}</li>
    </ul>
  </div>
</template>

<script>
// @ is an alias to /src
// import CostCenter from "@/components/CostCenter.vue";
import { mapGetters } from "vuex";
import { mapActions } from "vuex";

export default {
  computed: {
    ...mapGetters(["getCostCenter"])
  },
  methods: {
    ...mapActions(["loadCostCenter"])
  },
  created() {
    console.log("costcenter");

    this.loadCostCenter();
  }
};
</script>
