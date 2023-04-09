import { defineStore } from "pinia";

export const useTestStore = defineStore("moonHair", {
  state: () => ({
    leftBar: false,
    collapsed: false,
    headBar: false,
    headFixed: false
  }),
  actions: {
    setLeftBar(leftBar: boolean) {
      this.leftBar = leftBar;
    }
  }
});
