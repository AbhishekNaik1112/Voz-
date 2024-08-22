import axios from "axios";
const api = axios.create({
  baseURL: "http://localhost:5000/api",
  timeout: 5000,
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status >= 500) {
    }
    return Promise.reject(error);
  }
);

export default api;
