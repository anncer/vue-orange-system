import Api from "@/service";
import { IBaseRequest, ILoginUser } from "./types.d";

enum LoginApi {
  loginAccount = "api/security/auth/login",
  verifyCode = "api/security/verification/code/send",
  userInfo = "api/supplier/profiles/basic",
  menus = "api/supplier/profiles/basic"
}

export const userLogin = (token: string) => {
  return Api.post<IBaseRequest<string>>({
    url: LoginApi.loginAccount,
    headers: {
      Authorization: token
    }
  });
};

export const getVerifyCode = (mobile: string, method = "IM") => {
  return Api.post<IBaseRequest<boolean>>({
    url: LoginApi.verifyCode,
    data: {
      mobile,
      method
    }
  });
};

export const getUserInfo = () => {
  return Api.get<IBaseRequest<ILoginUser>>({
    url: LoginApi.userInfo
  });
};

export function getUserMenus(id: string) {
  return Api.get<IBaseRequest<ILoginUser>>({
    url: LoginApi.menus,
    data: { id }
  });
}
