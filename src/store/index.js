import { createStore } from "vuex";

export default createStore({
  state: {
    user: null,
  },
  getters: {},
  mutations: {
    setUser(state, payload) {
      state.user = payload;
      console.log("User state changed: ", state.user);
    },
  },
  actions: {},
  modules: {},
});
