export interface IRouterItem {
  name: string;
  path: string;
  id: string;
  icon: string;
  hidden: boolean;
  children?: IRouterItem[];
  component: string;
  isActive: boolean;
}

export interface IMenuItem {
  name: string;
  id: string;
  component: string;
}
