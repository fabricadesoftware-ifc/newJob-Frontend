<script setup>
import { useLocalStore } from '@/stores'
import { onMounted } from 'vue'
import { GoogleMap, Marker } from 'vue3-google-map'

// const apiKey = import.meta.env.VITE_API_KEY_GOOGLE

const localStore = useLocalStore()

onMounted(async()=> {
    await localStore.getAllLocations
})


const center = { lat: -26.3949876, lng: -48.7431859 }
</script>

<template>
  <GoogleMap
  api-key=AIzaSyC7p6_xVXwtZ3RmkwJMlrWcVVutEURGWSQ
  style="width: 100%; height: 500px"
  :center="center"
  :zoom="15"
  >
    <Marker :options="{ position: center }" />
  </GoogleMap>
</template>