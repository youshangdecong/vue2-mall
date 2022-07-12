import { request } from "../index";

export function getDetail(iid) {
  return request.get("/detail", {
    iid,
  });
}

export function getRecommend() {
  return request.get("/recommend");
}
