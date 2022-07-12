import dayjs from "dayjs";

export function fromatDate(time, type = "YYYY-MM-DD") {
  return dayjs(time).format(type);
}

export function customDirective(app) {
  app.directive("format", {
    // 当被绑定的元素插入到 DOM 中时……
    componentUpdated(el, bingding) {
      // 聚焦元素
      const length = el.innerHTML.length;
      let date = parseInt(el.innerHTML);
      date = length === 10 ? date * 1000 : date;
      el.innerHTML = fromatDate(date, bingding.value);
    },
  });
}
