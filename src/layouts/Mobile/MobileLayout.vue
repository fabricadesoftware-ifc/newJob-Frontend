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
  padding-top: 15vh;
}
</style>