import axios from "axios";

import { API_BASE_URL } from "@env";

export const api = axios.create({
  baseURL: "http://192.168.100.11:4000",
  timeout: 60 * 1000,
  validateStatus: (status) => {
    return status >= 200 && status <= 300;
  },
});
