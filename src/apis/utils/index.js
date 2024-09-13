import axios from "axios";

export const API = axios.create({
  baseURL: "입력해야함",
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});
