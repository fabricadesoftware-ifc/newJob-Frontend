<script setup>
import { MobileLoginUser, DesktopLoginUser } from "@/components";
import { useScreen } from "@/composables/screen";

const { isMobile } = useScreen();
</script>

<template>
  <section>
    <MobileLoginUser v-if="isMobile" />
    <DesktopLoginUser v-else />
  </section>
</template>