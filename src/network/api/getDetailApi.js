import { request } from "../index";

export function getDetail(iid) {
  return request.get("/detail", {
    iid,
  });
}
