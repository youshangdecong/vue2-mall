export function debounce(fn, delay = 500) {
  let timer = null;

  return function (...arg) {
    if (timer) {
      clearTimeout(timer);
      timer = null;
    }

    timer = setTimeout(() => {
      clearTimeout(timer);
      timer = null;

      fn.apply(this, arg);
    }, delay);
  };
}
