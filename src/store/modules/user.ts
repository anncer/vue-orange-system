/* eslint-disable no-empty-pattern */
import { Module } from "vuex";
import { IUserModule, IBaseState } from "../types.d";
import { userLogin, getUserInfo } from "@/api/login/login";
import cookie from "@/utils/cache";

const state = (): IUserModule => {
  return {
    name: "",
    userId: "",
    avatar: ""
  };
};

const user: Module<IUserModule, IBaseState> = {
  namespaced: true,
  state,
  getters: {},
  mutations: {
    SET_USERID(state, payload) {
      state.userId = payload;
    },
    SET_AVATAR(state, avatar) {
      state.avatar = avatar;
    },
    SET_USERNAME(state, name) {
      state.name = name;
    }
  },
  actions: {
    async accountLoginAction({}, payload: string) {
      console.log("执行accountLoginAction", payload);
      const loginResult = await userLogin(payload);
      const token = loginResult.data;
      cookie.set("Authorization", token);
    },
    async userInfo({ commit }) {
      const userInfo = await getUserInfo();
      const id = userInfo.data.id;
      const name = userInfo.data.name;
      const avatar = userInfo.data.avatar || "";
      commit("SET_USERID", id);
      commit("SET_AVATAR", avatar);
      commit("SET_USERNAME", name);
      cookie.set("userId", id);
    }
  }
};

export default user;
