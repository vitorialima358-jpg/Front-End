import axios from "axios";

const api = axios.create({
  baseURL: "https://blogpessoal-k4j.onrender.com"
});

export default api;