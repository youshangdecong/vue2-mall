export function formatCount(count) {
  if (!count) return;

  count = Number(count);
  if (count / 1000_000_00 > 1) {
    return (count / 1000_000_00).toFixed(1) + "亿";
  }
  if (count / 10000 > 1) {
    console.log(count / 10000);
    return (count / 10000).toFixed(1) + "万";
  }
  return count + "";
}
