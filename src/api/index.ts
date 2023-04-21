import Api from "@/service";
import { qsSpread, qsKeep } from "compool";

// 接口使用示例， 需要在调用的时候传入数据类型
// import Api from '@/api'
// import type { GlobalDataRequest } from "./global/types";
// import type { ILoginUser } from "./login/types";
// Api.update<GlobalDataRequest<ILoginUser>>('name', {})
//   .then(res => {
//     res.data.deptName
//   })

const add = <T>(name: string, data:any) => {
  return Api.request<T>({
    url: `${name}`,
    data,
    method: "post",
  });
};

const update = <T>(name: string, data:any) => {
  return Api.request<T>({
    url: `${name}`,
    data,
    method: "put",
  });
};

const get = <T>(name: string, id?: string) => {
  const url = id ? `${name}/${id}` : `${name}`;
  return Api.request<T>({
    url,
    method: "get",
  });
};

const getCode = <T>(name: string, code: string) => {
  return Api.request<T>({
    url: `${name}/identifier/${code}`,
    method: "get",
  });
};

const list = <T>(name: string, ...args: any) => {
  return Api.request<T>({
    url: `${name}${qsSpread("", args)}`,
    method: "get",
  });
};

const page = <T>(name: string, data:any) => {
  return Api.request<T>({
    url: `${name}/page${qsKeep("", data)}`,
    method: "get",
  });
};

const remove = <T>(name: string, id: string) => {
  return Api.request<T>({
    url: `${name}/${id}`,
    method: "delete",
  });
};

const down = <T>(name: string) => {
  return Api.request<T>({
    url: name,
    method: "get",
    responseType: "blob",
    // application/octet-stream
  });
};

const file = <T>(name: string, data:any) => {
  return Api.post<T>({
    url: name,
    data: data,
    method: "post",
    headers: {
      "Content-Type": "multipart/form-data",
      withCredentials: true,
    },
  });
};

export default {
  list,
  page,
  get,
  add,
  update,
  delete: remove,
  getCode,
  down,
  file,
};
