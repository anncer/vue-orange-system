import { RouteRecordRaw } from "vue-router";

export interface IRouterItem extends RouteRecordRaw {
  name: string;
  id: string;
  icon: string;
  hidden: boolean;
  children?: IRouterItem[];
}
