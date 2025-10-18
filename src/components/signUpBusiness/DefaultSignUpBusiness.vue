<script setup>
import { MobileSignUpBusiness, DesktopSignUpBusiness } from "@/components";
import { useScreen } from "@/composables/screen";

const { isMobile } = useScreen();
</script>

<template>
  <section>
    <MobileSignUpBusiness v-if="isMobile" />
    <DesktopSignUpBusiness v-else />
  </section>
</template>