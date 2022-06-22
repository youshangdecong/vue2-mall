import { request } from "../index";

export function getCategory() {
  return request.get("/category");
}
export function getSubcategory(maitKey) {
  return request.get("/subcategory", {
    maitKey,
  });
}
export function getCategoryDetail(miniWallkey, type) {
  return request.get("/subcategory/detail", {
    miniWallkey,
    type,
  });
}
