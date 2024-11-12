import axios from "axios";

class UserService {
    async getAllUsers() {
        try {
            const response = await axios.get('usuarios/');
            return response.data;
        } catch (error) {
            console.error("Erro ao buscar usuários:", error);
            throw error;  
        }
    }

    async getMeUser(authToken) {
        try {
            const response = await axios.get('/usuarios/me', {
                headers: {
                    Authorization: `Bearer ${authToken}`,
                },
            });
            return response.data;
        } catch (error) {
            console.error("Erro ao buscar o usuário logado:", error);
            throw error;  
        }
    }
}

export default new UserService();