import axios from "axios";

// CSRF 토큰 가져오기 함수
function getCookie(name) {
  let cookieValue = null;
  if (document.cookie && document.cookie !== "") {
    const cookies = document.cookie.split(";");
    for (let i = 0; i < cookies.length; i++) {
      const cookie = cookies[i].trim();
      if (cookie.substring(0, name.length + 1) === name + "=") {
        cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
        break;
      }
    }
  }
  return cookieValue;
}

const csrftoken = getCookie("csrftoken");
//http://otoeic.timelimitexceeded.kr
//http://172.30.1.22:8000
// axios 인스턴스 생성
const axiosInstance = axios.create({
  withCredentials: true,
  baseURL: "http://172.30.1.22:8000",
  headers: {
    "Content-Type": "application/json",
    // "X-CSRFToken": csrftoken,
  },
  auth: {
    username: "admin",
    password: "admin",
  },
});

// const axiosInstance = axios.create({
//   withCredentials: true,
//   baseURL: "http://172.30.1.22:8000",
// });

window.document.__axios = axiosInstance;
window.document.__axiosProxy = {
  get: async (url) => {
    const res = await axiosInstance.get(url);
    window.document.__axiosProxy.response = res;
    return res;
  },
  post: async (url, data) => {
    const res = await axiosInstance.post(url, data);
    window.document.__axiosProxy.response = res;
    return res;
  },
  response: undefined,
};
// const csrftoken = getCookie("csrftoken");

// const config = {
//   withCredentials: true,
//   headers: {
//     "Content-Type": "application/json",
//     // "X-CSRFToken": csrftoken,
//   },
// };

export { axiosInstance };
