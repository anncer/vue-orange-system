import http from "@/service";
import { jointUrl, jointUrl2 } from "@/utils/formate";

const add = (name: string, data:any) => {
  return http.request({
    url: `${name}`,
    data,
    method: "post",
  });
};

const update = (name: string, data:any) => {
  return http.request({
    url: `${name}`,
    data,
    method: "put",
  });
};

const get = (name: string, id?: string) => {
  const url = id ? `${name}/${id}` : `${name}`;
  return http.request({
    url,
    method: "get",
  });
};

const getCode = (name: string, code: string) => {
  return http.request({
    url: `${name}/identifier/${code}`,
    method: "get",
  });
};

const list = (name: string, ...args: any) => {
  return http.request({
    url: `${name}${jointUrl("", args)}`,
    method: "get",
  });
};

const page = (name: string, data:any) => {
  return http.request({
    url: `${name}/page${jointUrl2("", data)}`,
    method: "get",
  });
};

const remove = (name: string, id: string) => {
  return http.request({
    url: `${name}/${id}`,
    method: "delete",
  });
};

const down = (name: string) => {
  return http.request({
    url: name,
    method: "get",
    responseType: "blob",
    // application/octet-stream
  });
};

const file = (name: string, data:any) => {
  return http.post({
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
