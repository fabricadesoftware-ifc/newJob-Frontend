import { defineStore } from "pinia/dist/pinia";
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
    
    return {locations, getAllLocations}
})