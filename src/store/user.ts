import { defineStore } from "pinia";
import { userLogin, getUserInfo } from "@/api/login/login";
import cookie from "auth-cookie";

export const useUserStore = defineStore("user", {
  state: () => ({
    name: "",
    userId: "",
    avatar: ""
  }),
  actions: {
    async accountLoginAction(payload: string) {
      const loginResult = await userLogin(payload);
      const token = loginResult.data;
      cookie.set("Authorization", token);
    },
    async userInfo() {
      const userInfo = await getUserInfo();
      const id = userInfo.data.id;
      const name = userInfo.data.name;
      const avatar = userInfo.data.avatar || "";
      this.name = name;
      this.userId = id;
      this.avatar = avatar;
      cookie.set("userId", id);
    }
  }
});
