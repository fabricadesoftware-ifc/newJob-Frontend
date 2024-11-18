<script setup>
import {
  AboutIntroduction,
  HeaderComponent,
  AboutContent,
  FooterComponent,
} from "@/components";
import { useJobStore } from "@/stores";
import { onMounted } from "vue";
import { useRoute } from "vue-router";
const jobStore = useJobStore();
const routers = useRoute();
onMounted(() => {
  jobStore.getJob(routers.params.id);
});
</script>

<template>
  <HeaderComponent />
  <AboutIntroduction />
  <AboutContent />
  <FooterComponent />
</template>
