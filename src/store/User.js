export const UserModule = {
  namespaced: true,

  state: {
    user: null,
  },

  // mutation are functions that mutate the store state
  // convention: CAPS FUNCTION NAME
  mutations: {
    SET_USER(state, user) {
      state.user = user;
    },
  },
  // actions are functions that are called from components to call a specific mutation
  actions: {
    setUser({ commit }, user) {
      commit("SET_USER", user);
    },
  },
};
