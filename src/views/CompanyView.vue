<script setup>
import { HeaderComponent, FooterComponent, CompanyComponent } from "@/components";

import { useCompaniesStore } from "@/stores";
import { onMounted } from "vue";
import { useRoute } from "vue-router";
const companyStore = useCompaniesStore();
const routers = useRoute();
onMounted(() => {
  companyStore.getCompany(routers.params.id);
});
</script>

<template>
<HeaderComponent/>
<ContentComponent/>
<FooterComponent/>
</template>

<style scoped>
</style>