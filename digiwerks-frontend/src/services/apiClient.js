import axios from "axios";

const apiClient = axios.create({
  baseURL: "http://localhost:3000", // Rails server
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true // ← THIS enables cookies
});

export default apiClient;