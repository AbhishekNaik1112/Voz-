import axios from "axios";
const codeapi = axios.create({
  baseURL: "http://localhost:5000/codedata",
  timeout: 5000,
});

codeapi.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status >= 500) {
    }
    return Promise.reject(error);
  },
);

export default codeapi;
