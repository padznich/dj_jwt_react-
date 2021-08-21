import axios from "axios";

const API_URL = "http://localhost:8000/api/v1";  // TODO: move to .env


const obtainToken = (username, password) => {
  return axios
    .post(API_URL + "/user/obtain-token", {
      username,
      password,
    })
    .then((response) => {
      if (response.data.access) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }

      return response.data;
    });
};

const refreshToken = () => {
  const user = JSON.parse(localStorage.getItem("user"))
  return axios
    .post(API_URL + "/user/refresh-token", {
      refresh: user.refresh,
    })
    .then((response) => {
      if (response.data.access) {
        localStorage.setItem("user", JSON.stringify({ ...user, ...response.data }));
      }

      return response.data;
    });
};

const verifyToken = () => {
  const user = JSON.parse(localStorage.getItem("user"))
  return axios
    .post(API_URL + "/user/verify-token", {
      token: user.access,
    });
};


export default {
  obtainToken,
  refreshToken,
  verifyToken,
};
