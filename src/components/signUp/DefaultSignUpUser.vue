<script setup>
import { MobileSignUpUser, DesktopSignUpUser } from "@/components";
import { useScreen } from "@/composables/screen";

const { isMobile } = useScreen();
</script>

<template>
  <section>
    <MobileSignUpUser v-if="isMobile" />
    <DesktopSignUpUser v-else />
  </section>
</template>