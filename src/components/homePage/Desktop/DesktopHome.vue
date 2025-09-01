<script setup>
import { PageIntroduction, MainContent } from '@/components'
</script>

<template>
  <div class="hero">
    <PageIntroduction />
  </div>
  <MainContent />
</template>
<style scoped>
.hero {
  
  padding: 0 1% 1% 1%;
  height: 93vh;
  align-items: center;
}

@media (max-width: 1730px) {
  .hero {
    height: 50vw;
  }
}
</style>
