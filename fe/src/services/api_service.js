import axios from "axios";

import JWTService from "./jwt_service";


const api = axios.create();

// Request interceptor for API calls
api.interceptors.request.use(
  async config => {
    const user = JSON.parse(localStorage.getItem("user"))
    config.headers = {
      'Authorization': `Bearer ${user.access}`,
      'Accept': 'application/json',
      'Content-Type': 'application/x-www-form-urlencoded'
    }
    return config;
  },
  error => {
    Promise.reject(error)
});

// Response interceptor for API calls
api.interceptors.response.use((response) => {
  return response
}, async function (error) {
  const originalRequest = error.config;
  if (error.response.status === 401 && !originalRequest._retry) {
    originalRequest._retry = true;
    const { access_token } = await JWTService.refreshToken();
    axios.defaults.headers.common['Authorization'] = 'Bearer ' + access_token;
    return api(originalRequest);
  }
  return Promise.reject(error);
});


export default api;