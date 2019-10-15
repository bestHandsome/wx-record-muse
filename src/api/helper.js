import axios from "./axios.config";
const qs = require("qs");

export function post(url) {
  return function(data) {
    return axios
      .post(url, qs.stringify(data), {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        }
      })
      .then(res => {
        return res;
      });
  };
}

export function get(url) {
  return function(params) {
    return axios.get(url, params).then(res => {
      const { data } = res.data;
      return data;
    });
  };
}

export function deleteMethod(url) {
  return function(data) {
    return axios.delete(url, data).then(res => {
      return res;
    });
  };
}
