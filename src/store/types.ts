export interface IModuleType {
  [index: string]: any;
}

export interface IAppModule {
  // 是否有左侧菜单
  leftBar: boolean;
  // 左侧展开收起
  collapsed: boolean;
  // 是否有头部菜单
  headBar: boolean;
  // 头部固定开启
  headFixed: boolean;
}

export interface IUserModule {
  name: string;
  userId: string;
  avatar: string;
}

export interface IBaseState {
  name: "";
}
