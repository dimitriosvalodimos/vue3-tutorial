import { createStore } from "vuex";
import { UserModule } from "./User";

export default createStore({
  state: {},

  // mutation are functions that mutate the store state
  // convention: CAPS FUNCTION NAME
  mutations: {},
  // actions are functions that are called from components to call a specific mutation
  actions: {},

  modules: {
    User: UserModule,
  },
});
