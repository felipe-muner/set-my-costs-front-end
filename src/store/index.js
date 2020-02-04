import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    users: [
      {
        id: 1,
        first_name: "Donalt",
        last_name: "Ralling",
        email: "dralling0@paginegialle.it",
        gender: "Male",
        ip_address: "173.68.122.24"
      },
      {
        id: 2,
        first_name: "Maren",
        last_name: "Quan",
        email: "mquan1@unc.edu",
        gender: "Female",
        ip_address: "85.49.14.181"
      },
      {
        id: 3,
        first_name: "Janos",
        last_name: "Budnk",
        email: "jbudnk2@example.com",
        gender: "Male",
        ip_address: "210.14.247.164"
      }
    ],
    rates: [2, 4, 9],
    products: [
      { id: 1, name: "Banana Skin", price: 20 },
      { id: 2, name: "Shiny Star", price: 40 },
      { id: 3, name: "Green Shells", price: 60 },
      { id: 4, name: "Red Shells", price: 80 }
    ]
  },
  getters: {
    getRates: state => state.rates,
    saleProducts: state => {
      let valeProducts = state.products.map(product => {
        return {
          name: "**" + product.name + "**",
          price: product.price / 2
        };
      });
      return valeProducts;
    },
    getUsers: state => state.users
  },
  mutations: {
    SAVE_USERS(state, users) {
      state.users = users;
    },
    SAVE_RATES(state, rates) {
      state.rates = rates;
    }
  },
  actions: {
    async loadUsers({ commit }) {
      const response = await fetch("https://api.myjson.com/bins/l4tgy");
      const clients = await response.json();
      commit("SAVE_USERS", clients);
    },
    async loadRates({ commit }) {
      const response = await this._vm.$http.get(
        this._vm.$API + "/exchange-rate"
      );
      const rates = await response.data;
      commit("SAVE_RATES", rates);
    }
  },
  modules: {}
});
