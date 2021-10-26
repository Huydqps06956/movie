import axios from "axios";
import { BASE_URL } from '../constants/config';
const TOKEN_CYBERSPFT =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCAxNCIsIkhldEhhblN0cmluZyI6IjE4LzAzLzIwMjIiLCJIZXRIYW5UaW1lIjoiMTY0NzU2MTYwMDAwMCIsIm5iZiI6MTYyMTE4NDQwMCwiZXhwIjoxNjQ3NzA5MjAwfQ.Gn_duD0LZ6aamu893NNv17QlXn6HTFtyfWIFAIMBjEM";

const axiosClient = axios.create({
  baseURL: BASE_URL,
})
axiosClient.interceptors.request.use((config) => { //tất cả request đều phải qua đây 
  const user = localStorage.getItem('user');
  if (user) { // nếu có đăng nhập thì thực hiện
    const { accessToken } = JSON.parse(user)
    config.headers.common.Authorization = `Bearer ${accessToken}`;
    config.headers = {
      ...config.headers,
      TokenCybersoft: TOKEN_CYBERSPFT,
    }
  }
  return config;
},
  (errors) => {
    return Promise.reject(errors);
  })

export default axiosClient;
