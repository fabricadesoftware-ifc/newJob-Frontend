<script setup>
import { onMounted } from "vue";
import { CardJobs } from '@/components'
import { useJobStore } from "@/stores";

const jobStore = useJobStore()

async function getJobs() {
  await jobStore.getAllJobs(`job/`)
}
onMounted(async () => {
  await getJobs()
})

async function changeJobs(page) {
  await jobStore.getAllJobs(page)
}
</script>
<template>
  <div class="container">
    <h1>VAGAS</h1>
    <div class="grid-container">
      <!-- <div class="container-card" v-for="job in jobStore.jobs.results" :key="job">
        <CardJobs
          :image="job.image_job"
          :company="job.company.name"
          :title="job.title"
          :local="job.local"
          :id="job.id"
        />
      </div> -->
      <CardJobs />
      <CardJobs />
      <CardJobs />
      <CardJobs />
      <CardJobs />
      <CardJobs />
      <CardJobs />
      <CardJobs />
    </div>
    <div class="buttons">
      <i class="mdi mdi-arrow-left-thin-circle-outline"
        @click="changeJobs(jobStore.jobs.previous)"
        :class="jobStore.jobs.previous ? `arrow` : `disable arrow`"
      ></i>
      <i class="mdi mdi-arrow-right-thin-circle-outline"
        @click="changeJobs(jobStore.jobs.next)"
        :class="jobStore.jobs.next ? `arrow` : `disable arrow`"
      ></i>
    </div>
  </div>  
</template>

<style scoped>
.container {
  padding: 8em;
}

.title-job {
  display: flex;
  gap: 1em;
  padding-left: 8.5em;
  padding-bottom: 4em;
}

h1 {
  font-size: 50px;
  font-weight: 600;
}

.img-title {
  width: 90px;
}

.grid-container {
  margin: 3vw 0;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  /* grid-template-rows: repeat(2, 1fr); */
  gap: 2em;
  justify-items: center;
  align-items: center;
}

.buttons {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: auto;
  width: 50px;
  scale: 2;
  color: white;
  padding: 5em 0px 0px 0px;
}

.disable {
  pointer-events: none;
  filter: opacity(0.5);
}

.arrow {
  cursor: pointer;
  transition: transform 0.3s;
}

.arrow:hover {
  transform: scale(1.2);
}
</style>
