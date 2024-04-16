import { defineStore } from "pinia/dist/pinia";
import { computed, reactive } from "vue";
import StateService from '@/services/states'

export const useStateStore = defineStore('state', () => {
    const state = reactive({
        states: []
    })

    const states = computed(() => state.states)

    const getAllStates = async () => {
        const data = await StateService.getAllServices()
        state.states = data
    }

    return {states, getAllStates}
})