import { defineStore } from 'pinia'
import { computed, reactive } from 'vue'

export const useAuthStore = defineStore('auth', () => {
    const state = reactive({
        user: [],
        isLogged: false
    })
    const user = computed(() => state.user)

    return {user}
})