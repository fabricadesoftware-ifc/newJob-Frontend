import { defineStore } from 'pinia';
import AuthService from '@/services/auth';
import { ref } from 'vue';
import { useLoadingStore } from './loading';


const authService = new AuthService();

export const useAuthStore = defineStore('auth', () => {
    const user = ref({});
    const token = ref(null);
    const loadingStore = useLoadingStore() 
  
    async function setToken() {
        loadingStore.startLoading()
        user.value = await authService.postUserToken(token.value);
        loadingStore.stopLoading()
    };
  
    function unsetToken() {
        loadingStore.startLoading()
        user.value = {};
        loadingStore.stopLoading()
    };

    async function login(credentials) {
        try {
            loadingStore.startLoading()
            const response = await authService.LoginUser(credentials);
            token.value = response.access;  
            localStorage.setItem('authToken', response.access); 
            loadingStore.stopLoading()
            return response;

        } catch (error) {
            console.error("Login error:", error);
            throw error;
        }
    }
  
    function logout() {
        loadingStore.startLoading()
        token.value = null;
        localStorage.removeItem('authToken');
        loadingStore.stopLoading()
    }

    async function register(userData) {
        try {
            loadingStore.startLoading()  
            const response = await authService.RegisterUser(userData);
            loadingStore.stopLoading()
            return response; 
        } catch (error) {
            console.error("Registration error:", error);
            throw error; 
        }
    }
  
    return { user, setToken, unsetToken, login, logout, register };
});
