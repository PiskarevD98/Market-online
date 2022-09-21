import { createStore } from "vuex";

export default createStore({
  state: {
    name: "",
    family: "",
    email: "",
    items: [321, 345],
  },
  getters: {},
  mutations: {
    setName(state, name) {
      state.name = name;
    },
    setEmail(state, family) {
      state.name = family;
    },
    setEmail(state, email) {
      state.name = email;
    },
  },
  actions: {},
  modules: {},
});
