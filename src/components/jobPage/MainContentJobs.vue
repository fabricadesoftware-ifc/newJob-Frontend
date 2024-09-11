<script setup>
import { onMounted } from "vue";
import CardJobs from "./SecondComponents/CardJobs.vue";
import { ArrowLeftThinCircleOutline, ArrowRightThinCircleOutline } from "../icons";
import { useJobStore } from "@/stores";
import { ref } from "vue";
const jobStore = useJobStore();

const firstSliceNum = ref(0)
const secSliceNum = ref(4)

async function getJobs() {
  await jobStore.getAllJobs();
}

async function getJob(id) {
  await jobStore.getJob(id);
}

onMounted(async () => {
  await getJobs();
});

function nextJobs() {
  firstSliceNum.value += 4;
  secSliceNum.value += 4;
}

function previousJobs() {
  firstSliceNum.value -= 4;
  secSliceNum.value -= 4;
}
</script>

<template>
  <div class="container">
    <div class="title-job">
      <img src="https://i.ibb.co/PYsGjMJ/circulo-titulo-job.png" alt="" class="img-title" />
      <h2>Vagas</h2>
    </div>
    <div class="grid-container">
      <div class="container-card" v-for="job in jobStore.jobs.slice(firstSliceNum, secSliceNum)" :key="job">
        <CardJobs :company="job.company.name" :title="job.title" :local="job.local" :id="job.id" :getJob="getJob" />
      </div>
    </div>
    <div class="buttons">
      <ArrowLeftThinCircleOutline @click="previousJobs()" :class="firstSliceNum == 0 ? `disable arrow` : `arrow`" />
      <ArrowRightThinCircleOutline @click="nextJobs()"
        :class="secSliceNum >= jobStore.jobs.length ? `disable arrow` : `arrow`" />
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

.title-job>h2 {
  font-size: 34px;
}

.title-job>h2 {
  font-weight: normal;
  display: flex;
  justify-content: center;
  align-items: center;
}

.img-title {
  width: 90px;
}

.grid-container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
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
  filter: opacity(.5);
}

.arrow {
  cursor: pointer;
  transition: transform 0.3s;
}

.arrow:hover {
  transform: scale(1.2);
}
</style>
