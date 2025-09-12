<script setup>
import { DesktopHeroComponent, DesktopTextSection, DesktopAboutUsSection, DesktopBusinessSection } from '@/components'
</script>

<template>
  <div class="hero">
    <DesktopHeroComponent />
  </div>
  <DesktopTextSection />
  <DesktopAboutUsSection />
  <DesktopBusinessSection />
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
