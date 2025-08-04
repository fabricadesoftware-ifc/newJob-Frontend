<script setup>
import AboutComponent from "./AboutComponent.vue";
import LocateComponent from "./LocateComponent.vue";
import JobsComponent from "./JobsComponent.vue";
</script>

<template>
  <main>
    <div class="mainContainer">
      <AboutComponent />
      <LocateComponent />
    </div>
    <div class="jobsContainer">
      <JobsComponent />
    </div>
  </main>
</template>

<style scoped>
main {
  display: flex;
  min-height: 74vh;
  max-width: 100vw;
  padding: 13vh 10vw;
}
</style>
