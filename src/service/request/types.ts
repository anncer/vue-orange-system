import { AxiosRequestConfig, AxiosResponse } from "axios";
// AxiosResponse
export interface GlobalRequestInterceptors<T = AxiosResponse> {
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig;
  requestInterceptorCatch?: (error: any) => any;
  responseInterceptor?: (res: T) => T;
  responseInterceptorCatch?: (error: any) => any;
}

export interface GlobalRequestConfig<T = AxiosResponse>
  extends AxiosRequestConfig {
  interceptors?: GlobalRequestInterceptors<T>;
  loading?: boolean;
}

export interface qeeueItem {
  fullscreen: boolean;
  lock: boolean;
  visible: boolean;
  target: HTMLElement;
  beforeClose?: () => boolean;
  closed?: () => void;
}

export interface responseBody {
  code: number;
  msg: string;
  data: any;
}
