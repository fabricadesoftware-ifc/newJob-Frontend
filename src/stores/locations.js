import { defineStore } from "pinia";
import { computed, reactive } from "vue";
import LocalService from '@/services/locations'

export const useLocalStore = defineStore('local', () => {
    const state = reactive({
        locations: []
    })

    const locations = computed(() => state.locations)

    const getAllLocations = async () => {
        const data = await LocalService.getAllLocations()
        state.locations = data
    }
    
    const createLocation = async (locationData) => {
        const data = await LocalService.createLocation(locationData)
        state.locations.push(data)
    }

    const deleteLocation = async (id) => {
        const data = await LocalService.deleteLocation(id)
        state.locations = state.locations.filter(location => location.id !== id);
    }
    return {locations, getAllLocations, createLocation, deleteLocation}
})