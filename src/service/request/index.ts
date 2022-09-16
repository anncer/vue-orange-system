/* eslint-disable no-param-reassign */
import axios from "axios";
import type { AxiosInstance } from "axios";
import type { GlobalRequestInterceptors, GlobalRequestConfig } from "./types";
import { ElLoading } from "element-plus";

const DEFAULT_LOADING = false;

class GlobalRequest {
  instance: AxiosInstance;
  interceptors?: GlobalRequestInterceptors;
  loading: boolean;
  loadingComponent?: any;
  // qeeue: Array<AxiosInstance>;

  constructor(config: GlobalRequestConfig) {
    this.instance = axios.create(config);
    this.loading = config.loading ?? DEFAULT_LOADING;
    this.interceptors = config.interceptors;

    // 添加通用拦截器
    this.instance.interceptors.request.use(
      (config) => {
        // 判断并显示loading
        if (this.loading) {
          this.loadingComponent = ElLoading.service({
            lock: true,
            text: "正在请求数据...",
            fullscreen: true
          });
        }
        return config;
      },
      (error) => {
        return error;
      }
    );

    this.instance.interceptors.response.use(
      (res) => {
        // 关闭loading
        this.loadingComponent?.close();
        // checkStatus
        const data = res.data;
        if (data instanceof Blob) {
          return data;
        }
        const status = data.code;
        if (Number(status) === 20000) {
          return data;
        } else {
          // Msg("error", "请求失败！");
          // router.push({name: '401'})
        }
      },
      (error) => {
        this.loadingComponent?.close();
        if (error.response.status === 404) {
          console.log(404);
        }
        return error;
      }
    );

    // 实例的拦截器
    this.instance.interceptors.request.use(
      this.interceptors?.requestInterceptor,
      this.interceptors?.requestInterceptorCatch
    );

    this.instance.interceptors.response.use(
      this.interceptors?.responseInterceptor,
      this.interceptors?.responseInterceptorCatch
    );
  }

  request<T>(config: GlobalRequestConfig<T>): Promise<T> {
    return new Promise((resolve, reject) => {
      // 单个请求对config的处理(接口拦截器)
      if (config.interceptors?.requestInterceptor) {
        config = config.interceptors.requestInterceptor(config);
      }
      // 判断是否需要loading
      if (config.loading === !DEFAULT_LOADING) {
        this.loading = config.loading;
      }
      this.instance
        .request<any, T>(config)
        .then((res) => {
          // 单个请求数据的处理(接口拦截器)
          if (config.interceptors?.responseInterceptor) {
            res = config.interceptors.responseInterceptor(res);
          }
          // 重置loading状态
          this.loading = DEFAULT_LOADING;

          resolve(res);
        })
        .catch((error) => {
          // 重置loading状态
          this.loading = DEFAULT_LOADING;
          reject(error);
          return error;
        });
    });
  }

  get<T>(config: GlobalRequestConfig<T>): Promise<T> {
    return this.request({ ...config, method: "GET" });
  }

  post<T>(config: GlobalRequestConfig<T>): Promise<T> {
    return this.request({ ...config, method: "POST" });
  }

  delete<T>(config: GlobalRequestConfig<T>): Promise<T> {
    return this.request({ ...config, method: "DELETE" });
  }

  patch<T>(config: GlobalRequestConfig<T>): Promise<T> {
    return this.request({ ...config, method: "PATCH" });
  }
}

export default GlobalRequest;
