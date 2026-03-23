import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://digiwerks-api.onrender.com/",
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true
});

export default apiClient;