import api from "../services/api";
import AsyncStorage from "@react-native-async-storage/async-storage";

// Definição do tipo para o perfil do usuário
interface UserProfile {
  _id: string;
  nome: string;
  email: string;
  foto: string;
  status: string;
  telefone: string;
  tipo: string;
  dataCadastro: string;
}

// Função para obter o perfil do usuário autenticado
export const getPerfil = async (): Promise<UserProfile | null> => {
  try {
    // 🔹 Recupera o token salvo localmente
    let token = await AsyncStorage.getItem("userToken");

    if (!token) {
      console.warn("⚠️ Token não encontrado, usuário não autenticado.");
      return null;
    }

    // 🔹 Requisição para obter os dados do perfil
    const response = await api.get<UserProfile>("/api/user/perfil", {
      headers: { Authorization: `Bearer ${token}` },
    });

    if (response.status === 200) {
      const perfilAtual = response.data;

      // 🔹 Atualiza o AsyncStorage com o perfil atual
      await AsyncStorage.setItem("userProfile", JSON.stringify(perfilAtual));

      return perfilAtual;
    }

    console.error("❌ Erro ao obter dados do perfil:", response.status);
    return null;
  } catch (error: any) {
    if (error.response?.status === 401) {
      console.warn("⚠️ Token inválido ou expirado! Tentando atualizar...");

      // 🔄 Tentativa de renovar o token
      const novoToken = await refreshToken();
      if (novoToken) {
        console.log("✅ Novo token obtido:", novoToken);
        await AsyncStorage.setItem("userToken", novoToken);
        return getPerfil(); // 🔄 Tenta novamente com o novo token
      } else {
        console.error("❌ Não foi possível renovar o token.");
      }
    }

    console.error("❌ Erro ao obter dados do perfil:", error);
    return null;
  }
};


