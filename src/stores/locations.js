import { defineStore } from "pinia";
import { computed, reactive } from "vue";
import LocalService from '@/services/locations';
import { useLoadingStore } from './loading';

export const useLocalStore = defineStore('local', () => {
    const state = reactive({
        locations: []
    });

    const loadingStore = useLoadingStore();
    const locations = computed(() => state.locations);

    const getAllLocations = async () => {
        loadingStore.startLoading(); 
        try {
            const data = await LocalService.getAllLocations();
            state.locations = data;
        } finally {
            loadingStore.stopLoading(); 
        }
    }

    const createLocation = async (locationData) => {
        loadingStore.startLoading(); 
        try {
            const data = await LocalService.createLocation(locationData);
            state.locations.push(data);
        } finally {
            loadingStore.stopLoading(); 
        }
    }

    const deleteLocation = async (id) => {
        loadingStore.startLoading(); 
        try {
            await LocalService.deleteLocation(id);
            state.locations = state.locations.filter(location => location.id !== id);
        } finally {
            loadingStore.stopLoading(); 
        }
    }

    const updateLocation = async (id, locationData) => {
        loadingStore.startLoading(); 
        try {
            const updatedLocation = await LocalService.updateLocation(id, locationData);
            const index = state.locations.findIndex(location => location.id === id);
            if (index !== -1) {
                state.locations[index] = updatedLocation;
            }
        } finally {
            loadingStore.stopLoading(); 
        }
    }

    return { locations, getAllLocations, createLocation, deleteLocation, updateLocation };
});
