import { defineStore } from 'pinia';
import AuthService from '@/services/auth';
import { ref } from 'vue';

const authService = new AuthService();

export const useAuthStore = defineStore('auth', () => {
    const user = ref({});
    const token = ref(null);
  
    async function setToken() {
        user.value = await authService.postUserToken(token.value);
    };
  
    function unsetToken() {
        user.value = {};
    };

    async function login(credentials) {
        try {
            const response = await authService.LoginUser(credentials);
            token.value = response.access;  
            localStorage.setItem('authToken', response.access); 
            return response;
        } catch (error) {
            console.error("Login error:", error);
            throw error;
        }
    }
  
    function logout() {
        token.value = null;
        localStorage.removeItem('authToken');
    }

    async function register(userData) {
        try {
            const response = await authService.RegisterUser(userData);
            return response; 
        } catch (error) {
            console.error("Registration error:", error);
            throw error; 
        }
    }
  
    return { user, setToken, unsetToken, login, logout, register };
});
