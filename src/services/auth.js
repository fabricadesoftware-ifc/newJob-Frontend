import axios from "axios";

export default class AuthService {
    async RegisterUser(userData) {
        try {
            const response = await axios.post("/register", userData)
            return response.data
        } catch (error) {
            console.error('API request error:', error); 
            throw error;
        }
    }
    async LoginUser(credentials){
        try {
            const response = await axios.post("/login", credentials)
            return response.data
        } catch (error) {
            console.error('API request error:', error); 
            throw error;
        }
    }
    async postUserToken(token) {
        const response = await axios.get('/usuarios/me', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        return response.data;
      }
}