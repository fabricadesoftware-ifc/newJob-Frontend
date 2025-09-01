<script setup>
import { MobileProfile, DesktopProfile } from "@/components";
import { useScreen } from "@/composables/screen";

const { isMobile } = useScreen();
</script>

<template>
  <section>
    <MobileProfile v-if="isMobile" />
    <DesktopProfile v-else />
  </section>
</template>