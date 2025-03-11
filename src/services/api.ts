import axios from "axios";

const api = axios.create({
  baseURL: "http://10.10.36.61:3000", // Altere para o endereço correto da sua API
  timeout: 10000, // Tempo limite para a requisição (10s)
});

export default api;
