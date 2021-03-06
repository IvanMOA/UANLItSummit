import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import User from "./modules/User";

const store = new Vuex.Store({
  modules: {
    User,
  },
});

export default store;
