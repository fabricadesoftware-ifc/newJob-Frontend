<script setup>
import { MobileFooter, DesktopFooter } from "@/components";
import { useScreen } from "@/composables/screen";

const { isMobile } = useScreen();
</script>

<template>
  <section>
    <MobileFooter v-if="isMobile" />
    <DesktopFooter v-else />
  </section>
</template>