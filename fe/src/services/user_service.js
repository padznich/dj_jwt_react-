import axios from "axios";
import api from "./api_service";

const API_URL = "http://localhost:8000";  // TODO: move to .env

const getPublicContent = () => {
  return axios.get(API_URL + "/auth/users/me/");
};

const getUserBoard = () => {
  return api.get(API_URL + "/api/v1/show/");
};

export default {
  getPublicContent,
  getUserBoard,
};