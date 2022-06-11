import axios from "axios";

class PcRequest {
  constructor(config) {
    this.instance = axios.create(config);
    this.instance.interceptors.request.use(
      (config) => {
        return config;
      },
      (err) => {
        Promise.reject(err);
      }
    );
    this.instance.interceptors.response.use(
      (res) => {
        return res.data;
      },
      (err) => {
        Promise.reject(err);
      }
    );
  }
  request(config) {
    return this.instance.request(config);
  }
  get(url, params) {
    return this.instance.request({
      method: "get",
      url,
      params,
    });
  }
  post(url, data) {
    return this.instance.request({
      method: "get",
      url,
      data,
    });
  }
}

export default PcRequest;
