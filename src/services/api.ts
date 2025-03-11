import axios from "axios";

const api = axios.create({
  baseURL: "https://topbarberserver.onrender.com", // Altere para o endereço correto da sua API
  timeout: 10000, // Tempo limite para a requisição (10s)
});

export default api;
