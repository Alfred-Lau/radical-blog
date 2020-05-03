import Axios, { AxiosResponse } from "axios";
import { BASE_URL } from "./../config/env";

const request = Axios.create({
  baseURL: BASE_URL
});

request.interceptors.response.use((res: AxiosResponse<any>) => {
  if (res.status === 200) {
    return res.data;
  } else {
    alert("wrong");
  }
});

export default request;
