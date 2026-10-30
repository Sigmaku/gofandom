
import axios from "axios";

export const api = axios.create({
  baseURL: "https://pokeapi.co/api/v2",
  timeout: 10000,
});

api.interceptors.request.use(
  (config) => {
    config.headers.set("X-App-Name", "pokemon-app");
    config.headers.set("Accept", "application/json");
    console.log("Request URL:", config.url);
    console.log("Request Headers:", config.headers);
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);
