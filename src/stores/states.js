import { defineStore } from "pinia";
import { computed, reactive } from "vue";
import StateState from '@/services/states'

export const useStateStore = defineStore('state', () => {
    const state = reactive({
        states: []
    })

    const states = computed(() => state.states)

    const getAllStates = async () => {
        const data = await StateState.getAllStates()
        state.states = data
    }

    const createState = async (stateData) => {
        const data = await StateState.createState(stateData)
        state.states.push(data)
    }

    const deleteState = async (id) => {
        const data = await StateService.deleteState(id)
        state.states = state.states.filter(state => state.id !== id);
    }
    return {states, getAllStates, deleteState, createState}
})