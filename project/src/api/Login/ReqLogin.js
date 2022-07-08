import axios from "../AxiosExample";

export function ReqLogin(data) {
  return axios.post("/api/user/passport/login", data);
}

export function ReqRegister(data) {
  return axios.post("/api/user/passport/register", data);
}

export function ReqCode(phone) {
  return axios.get(`api/user/passport/sendCode/${phone}`);
}
