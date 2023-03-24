export interface IBaseRequest<T = any> {
  code: number;
  data: T;
  message: string;
}

export interface ILoginUser {
  avatar: string;
  name: string;
  id: string;
  mobile: number;
}
