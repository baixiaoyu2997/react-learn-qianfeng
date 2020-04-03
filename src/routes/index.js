import * as Icon from '@ant-design/icons';

import {
  Dashboard,
  Login,
  NotFound,
  Settings,
  ArticleList,
  ArticleEdit,
  Notifications,
  NoAuth
} from "../views";
export const mainRoutes = [
  {
    pathname: "/login",
    component: Login
  },
  {
    pathname: "/404",
    component: NotFound
  }
];

export const adminRoutes = [
  {
    pathname: "/admin/dashboard",
    component: Dashboard,
    title: "仪表盘",
    icon:Icon.DashboardOutlined,
    isNav: true,
    roles:['001','002','003']
  },
  {
    pathname: "/admin/article",
    component: ArticleList,
    title:'文章管理',
    icon:Icon.UnorderedListOutlined,
    isNav:true,
    exact: true,
    roles:['001','002']
  },
  {
    pathname: "/admin/article/edit/:id",
    component: ArticleEdit,
    roles:['001','002']
  },
  {
    pathname: "/admin/settings",
    component: Settings,
    title: "设置",
    icon:Icon.SettingOutlined,
    isNav: true,
    roles:['001']
  },{
    pathname: "/admin/notifications",
    component: Notifications,
    roles:['001','002','003']
  },{
    pathname: "/admin/noauth",
    component: NoAuth,
    roles:['001','002','003']
  }
];
