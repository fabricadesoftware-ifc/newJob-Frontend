<script setup>
import { MobileJobs, DesktopJobs } from "@/components";
import { useScreen } from "@/composables/screen";

const { isMobile } = useScreen();
</script>

<template>
  <section>
    <MobileJobs v-if="isMobile" />
    <DesktopJobs v-else />
  </section>
</template>