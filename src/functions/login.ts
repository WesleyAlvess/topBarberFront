import api from "../services/api";

export const login = async (
  email: string,
  senha: string,
  setData: (data: any) => void,
  setLoading: (loading: boolean) => void,
  setError: (error: boolean) => void
) => {
  setLoading(true);
  try {
    const response = await api.post("/api/user/login", { email, senha });
    setData(response.data); // Pega apenas os dados retornados
  } catch (error) {
    console.error("Erro ao fazer login:", error);
    setError(true);
  } finally {
    setLoading(false);
  }
};
