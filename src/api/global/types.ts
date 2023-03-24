export interface GlobalBaseRequest {
  code: number;
  message: string;
}


export interface GlobalDataRequest<T>  extends GlobalBaseRequest{
  data: T;
}

