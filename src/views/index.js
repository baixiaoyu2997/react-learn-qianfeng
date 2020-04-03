import Loadable from "react-loadable";
import { Loading } from "../components";
const ArticleList = Loadable({
  loader: () => import("./Article"),
  loading: Loading
});
const ArticleEdit = Loadable({
  loader: () => import("./Article/Edit"),
  loading: Loading
});
const Dashboard = Loadable({
  loader: () => import("./Dashboard"),
  loading: Loading
});
const Login = Loadable({
  loader: () => import("./Login"),
  loading: Loading
});
const NotFound = Loadable({
  loader: () => import("./NotFound"),
  loading: Loading
});
const Settings = Loadable({
  loader: () => import("./Settings"),
  loading: Loading
});
const Notifications = Loadable({
  loader: () => import("./Notifications"),
  loading: Loading
});
const NoAuth = Loadable({
  loader: () => import("./NoAuth"),
  loading: Loading
});
const Profile = Loadable({
  loader: () => import("./Profile"),
  loading: Loading
});
export { Dashboard, Login, NotFound, Settings, ArticleList, ArticleEdit,Notifications,NoAuth,Profile};
