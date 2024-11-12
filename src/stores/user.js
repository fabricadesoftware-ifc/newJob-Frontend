import { defineStore } from 'pinia';
import { computed, reactive } from 'vue';
import UserService from '@/services/user';
import { useLoadingStore } from '@/stores/loading'; 

export const useUserStore = defineStore('user', () => {
  const state = reactive({
    users: [],
    currentUser: null,  
    error: null,  
  });

  const users = computed(() => state.users);
  const currentUser = computed(() => state.currentUser); 
  const error = computed(() => state.error); 

  const loadingStore = useLoadingStore();

  const getAllUsers = async () => {
    loadingStore.startLoading(); 

    try {
      const data = await UserService.getAllUsers();
      state.users = data.results;
      state.error = null;  
    } catch (error) {
      state.error = 'Erro ao buscar usuários';  
      console.error('Erro ao buscar usuários:', error);
    } finally {
      loadingStore.stopLoading();
    }
  };

  const getMeUser = async (token) => {
    loadingStore.startLoading(); 

    try {
      const data = await UserService.getMeUser(token);  
      state.currentUser = data;  
      state.error = null;  
    } catch (error) {
      state.error = 'Erro ao buscar o usuário logado'; 
      console.error('Erro ao buscar o usuário logado:', error);
    } finally {
      loadingStore.stopLoading();
    }
  };

  

  return { 
    users, 
    getAllUsers, 
    currentUser, 
    getMeUser, 
    error  
  };
});