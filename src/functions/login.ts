import api from "../services/api"; // Importa a instância do Axios
import AsyncStorage from "@react-native-async-storage/async-storage"; // Para armazenar os dados localmente

/**
 * Função para autenticar o usuário via API
 * @param {string} email - Email do usuário
 * @param {string} senha - Senha do usuário
 * @returns {object | null} Retorna os dados do usuário em caso de sucesso ou null em caso de erro
 */

export const login = async (email: string, senha: string) => {
  try {
    // Envia a requisição para a API com email e senha
    const response = await api.post("/api/user/login", { email, senha });

    // Login bem sucediso, armazeno o token e os dados do usuario no
    if (response.data?.token) {
      await AsyncStorage.setItem("userToken", response.data.token);
      await AsyncStorage.setItem("userData", JSON.stringify(response.data));

      return response.data; // Retorna os dados do usuário para quem chamou a função
    }
    return null; // Retorna null caso a API não retorne um token
  } catch (error: any) {
    // Verifica se a resposta do servidor contém mensagem de erro
    const errorMessage =
      error.response?.data?.message || "Erro ao tentar fazer login.";
    console.error("Erro ao fazer login:", errorMessage);
    return null; // Retorna null para indicar que o login falhou
  }
};
