<script setup>
import { MobileLoginBusiness, DesktopLoginBusiness } from "@/components";
import { useScreen } from "@/composables/screen";

const { isMobile } = useScreen();
</script>

<template>
  <section>
    <MobileLoginBusiness v-if="isMobile" />
    <DesktopLoginBusiness v-else />
  </section>
</template>