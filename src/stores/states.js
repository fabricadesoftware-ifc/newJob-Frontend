import { defineStore } from 'pinia'
import { computed, reactive } from 'vue'
import StateService from '@/services/states'
import { useLoadingStore } from './loading'

export const useStateStore = defineStore('state', () => {
  const state = reactive({
    states: []
  })

  const loadingStore = useLoadingStore()
  const states = computed(() => state.states)

  const getAllStates = async () => {
    loadingStore.startLoading() 
    try {
      const data = await StateService.getAllStates()
      state.states = data
    } finally {
      loadingStore.stopLoading() 
    }
  }

  const createState = async (stateData) => {
    loadingStore.startLoading() 
    try {
      const data = await StateService.createState(stateData)
      state.states.push(data)
    } finally {
      loadingStore.stopLoading() 
    }
  }

  const deleteState = async (id) => {
    loadingStore.startLoading() 
    try {
      await StateService.deleteState(id)
      state.states = state.states.filter((state) => state.id !== id)
    } finally {
      loadingStore.stopLoading() 
    }
  }

  const updateState = async (id, stateData) => {
    loadingStore.startLoading() 
    try {
      const updatedState = await StateService.updateState(id, stateData)
      const index = state.states.findIndex((state) => state.id === id)
      if (index !== -1) {
        state.states[index] = updatedState
      }
    } finally {
      loadingStore.stopLoading() 
    }
  }

  return { states, getAllStates, deleteState, createState, updateState }
})
