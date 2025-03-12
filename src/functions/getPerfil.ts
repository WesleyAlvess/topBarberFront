import api from "../services/api"; // Importa a instância do Axios
import AsyncStorage from "@react-native-async-storage/async-storage"; // Para armazenar os dados localmente

export const getPerfil = async () => {
  try {
    // Recupera o token do AsyncStorage
    const token = await AsyncStorage.getItem("userToken");

    // Se não houver token, significa que o usuário não está autenticado
    if (!token) {
      console.warn("Token não encontrado, usuário não autenticado.");
      return null; // Interrompe a função retornando null
    }

    // Faz a requisição GET para obter os dados do perfil do usuário
    const response = await api.get("/api/user/perfil", {
      headers: { Authorization: `Bearer ${token}`} // Envia o token no cabeçalho da requisição
    })

    return response.data; // Retorna os dados do perfil do usuário

  } catch (error) {
    console.error("Erro ao obter dados do Perfil!", error);
    return null;
  }
};
