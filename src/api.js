// src/api.js
import axios from "axios";

const api = axios.create({
  baseURL: "https://reqres.in/api",
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
    "x-api-key": "reqres-free-v1", // 🔑 your free API key
  },
});

export default api;
