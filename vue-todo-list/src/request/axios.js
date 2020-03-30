import axios from "axios";

import { baseURL } from "./comUrl";

// axios.defaults.baseURL = baseURL;

// 请求超时时间
axios.defaults.timeout = 3000;

// axios.interceptors.request.use(config => { }, error => { })

// 响应拦截器
axios.interceptors.response.use(
  response => {
    window.console.log("response", response);
    if (response && response.status === 200) {
      return Promise.resolve(response);
    } else {
      return Promise.reject(response);
    }
  },
  error => {
    if (error.response && error.response.status) {
      switch (error.response.status) {
        case 401:
          this.$notification("未登录状态");
          break;
        case 403:
          this.$notification({
            message: "登录过期，请重新登录",
            duration: 1000,
            forbidClick: true
          });
          break;
        case 404:
          this.$notification({
            message: "网络请求不存在",
            duration: 1500,
            forbidClick: true
          });
          break;
        case 500:
          this.$notification({
            message: "请求失败",
            duration: 1500,
            forbidClick: true
          });
          break;
        default:
          this.$notification({
            message: error.response.data.message,
            duration: 1500,
            forbidClick: true
          });
      }
      return Promise.reject(error.response);
    } else {
      window.console.log("res异常打印", error);
      this.$notification("请求异常");
    }
  }
);

/**
 * get方法，对应get请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
function get(url, params) {
  return new Promise((resolve, reject) => {
    axios
      .get(url, {
        params: params
      })
      .then(res => {
        resolve(res.data);
      })
      .catch(err => {
        reject(err.data);
      });
  });
}
/**
 * post方法，对应post请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
function post(url, params) {
  return axios
    .post(url, params)
    .then(res => {
      window.console.log("http打印", res);
      return res.data;
    })
    .catch(err => {
      return err.data;
    });
}

export { post, get, baseURL };
