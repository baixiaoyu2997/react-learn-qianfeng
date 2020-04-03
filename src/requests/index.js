import axios from "axios";
import { message } from "antd";
const isDev = process.env.NODE_ENV === "development";
const service = axios.create({
  baseURL: isDev ? "http://rap2.taobao.org:38080/app/mock/249448" : ""
});
const service1 = axios.create({
  baseURL: isDev ? "http://rap2.taobao.org:38080/app/mock/249448" : ""
});
service.interceptors.request.use(config => {
  config.data = Object.assign({}, config.data, {
    authToken: "sfsdfsdfsdf"
  });
  // return Object.assign({},config.headers,{authToken:'sdfsd'})
  return config;
});
service.interceptors.response.use(resp => {
  if (resp.data.code === 200) {
    return resp.data.data;
  } else {
    // 全局处理错误
    message.error("错误");
  }
});
// 获取文章
export const getArticles = (offset = 0, limit = 10) => {
  return service.post("/api/v1/articlelist", {
    offset,
    limit
  });
};
// 通过id删除文章
export const deleteArticle = id => {
  return service.post("/api/v1/articleDelete", {
    id
  });
};
// 通过id获取文章
export const getArticleById = id => {
  return service.post(`/api/v1/article/${id}`);
};
// 通过id保存文章
export const saveArticle = (id,data) => {
  return service.post(`/api/v1/articleEdit/${id}`,data);
};
// 获取通知列表
export const getNotifications=()=>{
  return service.post('/api/v1/notifications')
} 
// 登录
export const doLogin=(userInfo)=>{
  return service1.post('/api/v1/login',userInfo)
} 
