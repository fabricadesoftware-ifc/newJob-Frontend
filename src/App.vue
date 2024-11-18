<script setup>
import { RouterView } from 'vue-router';
import { useLoadingStore } from '@/stores/loading';
import { LoadingPage } from './components';

const loadingStore = useLoadingStore();
</script>

<template>
  <div id="app">
    <LoadingPage v-if="loadingStore.isLoading" />
    <RouterView v-else />
  </div>
</template>
