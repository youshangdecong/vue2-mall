import PcRequest from "./request/index";

let baseURL = "";
let timeout = 0;

if (process.env.NODE_ENV === "development") {
  baseURL = "http://152.136.185.210:7878/api/hy66";
  timeout = 5000;
}
if (process.NODE_ENV === "production") {
  baseURL = "http://152.136.185.210:7878/api/hy66";
  timeout = 5000;
}

const request = new PcRequest({
  baseURL,
  timeout,
});
export { request };
