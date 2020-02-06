<template lang="html">
  <div class="">
    <v-tooltip top>
      <v-btn
        @click.native.stop="dialog = true"
        small
        color="success"
        slot="activator"
        fab
      >
        <v-icon>add</v-icon>
      </v-btn>
      <span>Add</span>
    </v-tooltip>
    <v-dialog class="modalFilter" v-model="dialog" max-width="30%">
      <v-card>
        <v-card-title class="py-0">
          <span>Add Cost Center</span>
          <v-spacer></v-spacer>
          <v-menu bottom left>
            <v-btn icon slot="activator" @click.stop="dialog = false">
              <v-icon>close</v-icon>
            </v-btn>
          </v-menu>
        </v-card-title>
        <v-container grid-list-md>
          <v-form v-model="valid" ref="form" lazy-validation>
            <v-layout row wrap>
              <v-flex xs12 class="pt-0">
                <v-text-field
                  label="Name"
                  v-model="nameCostCenter"
                  :rules="NameRules"
                  type="text"
                ></v-text-field>
              </v-flex>
            </v-layout>
            <input v-model="nameCostCenter" />
            {{nameCostCenter}}
            <v-layout row wrap>
              <v-flex xs12 class="text-xs-right">
                <v-btn @click="submitForm" :disabled="!valid" color="primary">
                  Creat
                </v-btn>
              </v-flex>
            </v-layout>
          </v-form>
        </v-container>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      dialog: false,
      Name: "",
      NameRules: [v => !!v || "Name is required"],
      valid: true
    };
  },
  computed: {
    nameCostCenter: {
      get() {
        return this.$store.state.costCenter.nameCostCenter;
      },
      set(val) {
        this.$store.commit("updateName", val);
      }
    }
  },
  methods: {
    ...mapActions(["saveCostCenter"]),
    submitForm() {
      if (this.$refs.form.validate()) {
        this.saveCostCenter();
        this.dialog = false;
      }
    }
  },
  created() {
    console.log("created");
  }
};
</script>

<style lang="css"></style>
