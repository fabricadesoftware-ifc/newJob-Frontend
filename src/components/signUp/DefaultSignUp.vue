<script setup>
import { MobileSignUp, DesktopSignUp } from "@/components";
import { useScreen } from "@/composables/screen";

const { isMobile } = useScreen();
</script>

<template>
  <section>
    <MobileSignUp v-if="isMobile" />
    <DesktopSignUp v-else />
  </section>
</template>