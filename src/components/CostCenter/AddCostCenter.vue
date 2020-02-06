<template lang="html">
  <div class="">
    <v-dialog
      v-model="myDialog"
      width="40%"
    >
      <template v-slot:activator="{ on }">
        <v-btn @click.native.stop="myDialog = true" small color="success" fab v-on="on">
          <v-icon>add</v-icon>
        </v-btn>
      </template>
      <v-card>
        <v-card-title
          class="headline grey lighten-2"
          primary-title
        >
          Privacy Policy
        </v-card-title>
        <v-card-text>
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
        </v-card-text>
        <v-divider></v-divider>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      myDialog: false,
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
        this.myDialog = false;
        this.$refs.form.reset();
      }
    }
  },
  created() {}
};
</script>

<style lang="css"></style>
