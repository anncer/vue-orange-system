import Api from "@/service";
import { IBaseRequest, ILoginUser, IInfoMobile } from "./types.d";
import cookie from "@/utils/cache";

export enum LoginApi {
    // 获取用户信息，含手机号
  getUser = "/api/admin-v2/user/info",
  loginAccount = "dmpp/api/security/auth/login",
  verifyCode = "dmpp/api/security/verification/code/send",
  userInfo = "dmpp/api/supplier/profiles/basic",
  getUserInfo = "/api/admin/auth/getUserInfo",
  getAvatar = "dmpp/api/fs/file/download/",
}

export const dmppUserLogin = (token: string) => {
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
// 获取数据中台用户信息
export const getUserInfo = () => {
  return Api.get<IBaseRequest<ILoginUser>>({
    url: LoginApi.userInfo
  });
};

// 获取综合平台用户信息
export const getUserInfoFromZHPT = () => {
  return Api.get<IBaseRequest<ILoginUser>>({
    url: LoginApi.userInfo
  });
};
 export const getUserInfoApi = () => {
    return Api.request<IBaseRequest<ILoginUser>>({
    url: LoginApi.getUserInfo,
    method: "GET",
    params: cookie.get("ESP-TOKEN"),
    loading: true,
  });
};

// 通过综合平台token获取用户手机号等信息
export const getUserMessage = () => {
   return Api.request<IBaseRequest<IInfoMobile>>({
    url: LoginApi.getUser,
    method: "GET",
    headers: {
      "ESP-TOKEN" :cookie.get("ESP-TOKEN") || "",
      "Authorization" :cookie.get("ESP-TOKEN") || "",
    },
    loading: true
  });
}

// export function getUserMenus(id: string) {
//   return Api.get<IBaseRequest<ILoginUser>>({
//     url: LoginApi.menus,
//     data: { id }
//   });
// }
