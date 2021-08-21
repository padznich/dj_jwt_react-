import axios from "axios";

import JWTService from "./jwt_service"


const API_URL = "http://localhost:8000/api";  // TODO: move to .env

const register = (username, email, password) => {
  return axios.post(API_URL + "/auth/users", {
    username,
    email,
    password,
  });
};

const login = (username, password) => {
  return JWTService.obtainToken(username, password);
};

const logout = () => {
  localStorage.removeItem("user");
};

const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};

export default {
  register,
  login,
  logout,
  getCurrentUser,
};