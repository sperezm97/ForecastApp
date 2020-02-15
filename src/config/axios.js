import axios from "axios";
import * as env from "./env";

const instance = axios.create({
  baseURL: env.default.API_WEATHER
});

instance.interceptors.request.use(
  config => {
    config.url = config.url += `&appid=${env.default.API_WEATHER_KEY}`;
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    return Promise.reject(error);
  }
);

export default instance;
