<script setup>
import DesktopHeader from "./Desktop/DesktopHeader.vue";
import MobileHeader from "./Mobile/MobileHeader.vue";

import { useScreen } from "@/composables";

const { isMobile } = useScreen();
</script>

<template>
  <MobileHeader v-if="isMobile" />
  <DesktopHeader v-else />
</template>

<style></style>