export interface IBaseRequest<T = any> {
  code: number;
  data: T;
  message: string;
}

export interface IServiewTime {
  avatar: string;
  name: string;
  id: string;
  mobile: number;
}
