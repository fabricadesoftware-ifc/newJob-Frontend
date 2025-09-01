<script setup>
import { MobileLogin, DesktopLogin } from "@/components";
import { useScreen } from "@/composables/screen";

const { isMobile } = useScreen();
</script>

<template>
  <section>
    <MobileLogin v-if="isMobile" />
    <DesktopLogin v-else />
  </section>
</template>