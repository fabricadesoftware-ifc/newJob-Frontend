<script setup>
import {
  HeaderComponent,
  PageIntroduction,
  MainContent,
  FooterComponent
} from '@/components/index.js'
</script>

<template>
  <div class="top">
    <HeaderComponent class="header" />
    <PageIntroduction class="introduction" />
  </div>
  <MainContent />
  <FooterComponent />
</template>
<style scoped>
.top {
  display: grid;
  padding: 0 1% 1% 1%;
  height: 98vh;
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

@media (max-width: 1530px) {
  .top {
    height: 60vw;
  }
}
</style>
