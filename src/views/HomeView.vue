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
    <div class="teste">
      <HeaderComponent class="header" />
      <PageIntroduction class="introduction" />
    </div>
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

.teste {
  display: grid;
  padding: 0 2vh 2vh 2vh;
  max-height: 100vh;
  height: 98vh;
  align-items: center;
  justify-content: center;
  grid-template-rows: 8% 92%;
  grid-template-areas:
    "header"
    "introduction";

  & .introduction {
    grid-area: introduction;
  }

  & .header {
    grid-area: header;
    margin: auto;
  }
}
</style>
