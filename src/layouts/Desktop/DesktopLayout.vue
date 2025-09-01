<script setup>
import { DefaultHeader, DefaultFooter } from "@/components";
</script>

<template>
  <DefaultHeader />
  <main id="router-container">
    <RouterView />
  </main>
  <DefaultFooter />
</template>
<style scoped>
#router-container {
  display: flex;
  max-width: 100vw;
  height: auto;
}
</style>