<script setup>
import {
  HeaderComponent,
  PageIntroduction,
  MainContent,
  FooterComponent
} from '@/components/index.js'
</script>

<template>
  <div class="father-container">
    <HeaderComponent />
    <PageIntroduction />
    <MainContent />
    <FooterComponent />
  </div>
</template>
<style scoped>
.father-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>