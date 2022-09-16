/* eslint-disable @typescript-eslint/no-non-null-assertion */
import GlobalRequest from "./request";
import { BASE_URL, TIME_OUT } from "./request/config";
import cookie from "@/utils/cache";

const Api = new GlobalRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  interceptors: {
    requestInterceptor: (config) => {
      const token = cookie.get("Authorization");
      if (token) {
        config.headers!.Authorization = `Bearer ${token}`;
      }
      return config;
    },
    requestInterceptorCatch: (error) => {
      return error;
    },
    responseInterceptor: (res) => {
      return res;
    },
    responseInterceptorCatch: (error) => {
      return error;
    }
  }
});

export default Api;
