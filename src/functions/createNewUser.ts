import api from "../services/api";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const createNewUser = async (nome: string, email: string, senha: string, telefone: string) => {
  try {
    const response = await api.post("/api/user", {
      nome,
      email,
      senha,
      telefone,
    });

    console.log("🟢 Usuário criado com sucesso:", response.data);
    return response.data;


  } catch (error: any) {
    console.error("🔴 Erro ao criar o usuário:", error.response?.data || error.message);

    // Se a API retornar erro, repassamos para o frontend
    throw new Error(error.response?.data?.message || "🔴 Erro ao criar conta");
  }
};
