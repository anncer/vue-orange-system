// 全局公共接口
import Api from "@/service";
import type { IBaseRequest, IServiewTime } from "./types";

export enum GlobalApi {
  serviceTile = "/api/application/vacation/specialuser/getLocalDate",
  getUserInfo = "/api/admin/auth/getUserInfo",
  getUserDetail = "/api/admin/user/selectById/",
  uploadFile = "/api/fs/file/upload",
  downFile = "/api/fs/file/download/",
  downFileMut = "/api/fs/file/download/archive/",
  downLoadById = "/api/fs/file/download/id",
  getOrg = "api/admin-v2/org/children/3302",
  getUser = "api/admin-v2/user/page/or/list"
}

// 获取服务器时间
export const getServiceTime = () => {
  return Api.get<IBaseRequest<string>>({
    url: GlobalApi.serviceTile
  });
};

// 获取用户信息
export const getUserInfo = () => {
  return Api.get<IBaseRequest<any>>({
    url: GlobalApi.getUserInfo
  });
};

// 获取用户详情信息
export function getUserDetail(userId: string) {
  return Api.get<IBaseRequest<any>>({
    url: `${GlobalApi.getUserDetail}${userId}`
  });
}

// 获取查询条件下的所有人员不分页
export function getAllUsers(params?: any) {
  return Api.post<IBaseRequest<any>>({
    url: GlobalApi.getUser,
    data: {
      enabledPage: false,
      ids: [],
      params: params || {}
    }
  });
}

// 获取查询条件下的所有人员分页
export function getPageUsers(page: number, size: number, params?: any) {
  return Api.post<IBaseRequest<any>>({
    url: GlobalApi.getUser,
    data: {
      enabledPage: true,
      ids: [],
      page,
      size,
      params: params || {}
    }
  });
}

// 获取北京院组织机构
export function getAllDepts() {
  return Api.get<IBaseRequest<any>>({
    url: GlobalApi.getOrg
  });
}
// 文件下载
/**
 * 以流的形式下载文件
 * @param id
 */
export function downLoadAsStream(id: any) {
  return Api.get<IBaseRequest<any>>({
    url: `${GlobalApi.downLoadById}`,
    params: {
      fileId: id
    },
    responseType: "blob"
  });
}

// 文件批量下载
export function downLoadFileMut(data: any) {
  return Api.post<IBaseRequest<any>>({
    url: `${GlobalApi.downFileMut}`,
    responseType: "blob",
    data
  });
}
