import {
  Dashboard,
  Login,
  NotFound,
  Settings,
  ArticleList,
  ArticleEdit
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
    isNav: true
  },
  {
    pathname: "/admin/article",
    component: ArticleList,
    title:'文章管理',
    isNav:true,
    exact: true
  },
  {
    pathname: "/admin/article/edit/:id",
    component: ArticleEdit
  },
  {
    pathname: "/admin/settings",
    component: Settings,
    title: "设置",
    isNav: true
  }
];
