import Api from "@/service";

enum MenuApi {
  loginAccount = "api/security/auth/login",
  verifyCode = "api/security/verification/code/send",
  userInfo = "api/supplier/profiles/basic"
}

export const userLogin = (token: string) => {
  return Api.request({
    url: MenuApi.loginAccount,
    method: "post",
    headers: {
      Authorization: token
    }
  });
};
