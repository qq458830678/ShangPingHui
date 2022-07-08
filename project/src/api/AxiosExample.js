import axios from "axios";

// export default

const AxiosExample = axios.create({
  baseURL: "http://gmall-h5-api.atguigu.cn",
  timeout: 1000,
});

AxiosExample.interceptors.response.use((res) => res.data);

export default AxiosExample;
