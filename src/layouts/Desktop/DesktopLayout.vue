<script setup>
import { DefaultHeader } from "@/components";
</script>

<template>
  <DefaultHeader />
  <main id="router-container">
    <RouterView />
  </main>
</template>
<style scoped>
#router-container {
  display: flex;
  max-width: 100vw;
  height: auto;
}
</style>