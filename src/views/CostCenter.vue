<template>
  <div>
    <AddCostCenter />
    <CostCenter />
  </div>
</template>

<script>
// @ is an alias to /src
import AddCostCenter from "@/components/CostCenter/AddCostCenter.vue";
import CostCenter from "@/components/CostCenter/CostCenter.vue";

export default {
  name: "costcenter",
  components: {
    AddCostCenter,
    CostCenter
  }
};
</script>
