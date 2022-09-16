import { createStore } from "vuex";
import { IBaseState } from "./types.d";
import app from "./modules/app";
import user from "./modules/user";

const srore = createStore<IBaseState>({
  state() {
    return {
      name: ""
    };
  },
  modules: {
    app,
    user
  }
});

export default srore;
