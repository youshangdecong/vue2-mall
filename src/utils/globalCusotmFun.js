import eventbus from "@/eventbus/eventbus";

const cover = function changCover(res) {
  eventbus.$emit("changCover", res);
};

export function globalCusotmFun(app) {
  app.prototype.$cover = cover;
}
