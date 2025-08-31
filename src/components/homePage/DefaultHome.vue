<script setup>
import { MobileHome, DesktopHome } from "@/components";
import { useScreen } from "@/composables";

const { isMobile } = useScreen();
</script>

<template>
  <section>
    <MobileHome v-if="isMobile" />
    <DesktopHome v-else />
  </section>
</template>