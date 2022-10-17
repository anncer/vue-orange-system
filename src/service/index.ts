/* eslint-disable @typescript-eslint/no-non-null-assertion */
import GlobalRequest from "./request";
import cookie from "@/utils/cache";
import { AxiosRequestHeaders } from 'axios';

const Api = new GlobalRequest({
  baseURL: "",
  interceptors: {
    requestInterceptor: (config) => {
      const token = cookie.get("ESP-TOKEN");

      if (token) {
        const headers:AxiosRequestHeaders = {};
        headers['ESP-TOKEN'] = token;
        headers.Authorization = token;
        config.headers = config.headers ? { ...config.headers, ...headers } : headers;
      }
      return config;
    },
    requestInterceptorCatch: (error) => {
      return Promise.reject(error);
    },
    responseInterceptor: (res) => {
      return res;
    },
    responseInterceptorCatch: (error) => {
      return Promise.reject(error);
    }
  }
});

export default Api;
