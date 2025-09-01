<script setup>
import DesktopLayout from "./Desktop/DesktopLayout.vue";
import MobileLayout from "./Mobile/MobileLayout.vue";
import { useScreen } from "@/composables/screen";

const { isMobile } = useScreen();
</script>

<template>
        <MobileLayout v-if="isMobile" />
        <DesktopLayout v-else />
</template>