import axios from "axios";

const api = axios.create({
  baseURL: "https://topbarberserver.onrender.com", // Altere para o endereço correto da sua API
});

export default api;
