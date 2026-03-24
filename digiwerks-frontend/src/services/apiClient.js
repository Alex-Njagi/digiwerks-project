import axios from "axios";
const apiUrl = import.meta.env.VITE_API_URL;
console.log(import.meta.env.VITE_API_URL);

const apiClient = axios.create({
  baseURL: apiUrl,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true
});

export default apiClient;