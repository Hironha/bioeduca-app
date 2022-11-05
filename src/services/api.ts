import axios from "axios";

import { API_BASE_URL } from "@env";

export const api = axios.create({
  baseURL: API_BASE_URL ?? process.env.API_BASE_URL,
  timeout: 60 * 1000,
  validateStatus: (status) => {
    return status >= 200 && status <= 300;
  },
});
