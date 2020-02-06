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
          <!-- <form>
            <v-text-field
              v-model="name"
              :error-messages="nameErrors"
              :counter="10"
              label="Name"
              required
            ></v-text-field>        
            <v-btn class="mr-4" @click="submit">submit</v-btn>
          </form> -->
          <v-form v-model="valid" ref="form" lazy-validation>
            <v-layout row wrap>
              <v-flex xs12 class="pt-0">
                <v-text-field
                  label="Name"
                  v-model="$store.state.costCenter.nameCostCenter"
                  :rules="NameRules"
                  type="text"
                ></v-text-field>
              </v-flex>
            </v-layout>
            {{$store.state.costCenter.nameCostCenter}}
            --<input v-model="$store.state.costCenter.nameCostCenter" />
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
      set(e) {
        this.$store.commit("updateName", e.value.target);
      }
    }
  },
  methods: {
    submitForm() {
      if (this.$refs.form.validate()) {
        this.$store.dispatch("saveCostCenter");
        this.dialog = false;
      }
    }
  }
};
</script>

<style lang="css"></style>
