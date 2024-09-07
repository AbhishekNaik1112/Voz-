import axios from "axios";
const userapi = axios.create({
  baseURL: "http://localhost:5000/userdata",
  timeout: 5000,
});

userapi.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status >= 500) {
    }
    return Promise.reject(error);
  },
);

export default userapi;
