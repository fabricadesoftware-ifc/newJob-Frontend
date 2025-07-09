<script setup>
import {
  HeaderComponent,
  PageIntroduction,
  MainContent,
  FooterComponent
} from '@/components/index.js'
</script>

<template>
  <div class="teste">
    <HeaderComponent class="header" />
    <PageIntroduction class="introduction" />
  </div>
  <MainContent />
  <FooterComponent />
</template>
<style scoped>
.teste {
  display: grid;
  padding: 0 2% 2% 2%;
  height: 96vh;
  align-items: center;
  
  grid-template-rows: 6% auto;
  grid-template-areas:
    'header'
    'introduction';

  & .introduction {
    grid-area: introduction;
  }

  & .header {
    grid-area: header;
    margin: auto;
  }
}
</style>
