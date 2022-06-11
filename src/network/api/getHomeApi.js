// 获取首页信息
import { request } from "../index";
export function getHomeInfo() {
  return request.get("/home/multidata");
}

//获取navbar商品分类信息
export function getNavBarInfo(type, page) {
  return request.get("/home/data", {
    type,
    page,
  });
}
