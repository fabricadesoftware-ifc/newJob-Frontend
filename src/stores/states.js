import { defineStore } from 'pinia'
import { computed, reactive } from 'vue'
import StateService from '@/services/states'

export const useStateStore = defineStore('state', () => {
  const state = reactive({
    states: []
  })

  const states = computed(() => state.states)

  const getAllStates = async () => {
    const data = await StateService.getAllStates()
    state.states = data
  }

  const createState = async (stateData) => {
    const data = await StateService.createState(stateData)
    state.states.push(data)
  }

  const deleteState = async (id) => {
    await StateService.deleteState(id)
    state.states = state.states.filter((state) => state.id !== id)
  }

  const updateState = async (id, stateData) => {
    const updatedState = await StateService.updateState(id, stateData)
    const index = state.states.findIndex((state) => state.id === id)
    if (index !== -1) {
      state.states[index] = updatedState
    }
  }
  return { states, getAllStates, deleteState, createState, updateState }
})
