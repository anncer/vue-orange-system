import { Module } from "vuex";
import type { IAppModule, IBaseState } from "../types";

const state = (): IAppModule => {
  return {
    leftBar: false,
    collapsed: false,
    headBar: false,
    headFixed: false
  };
};
const getters = {};
const mutations = {};
const actions = {};

const user: Module<IAppModule, IBaseState> = {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
};

export default user;
