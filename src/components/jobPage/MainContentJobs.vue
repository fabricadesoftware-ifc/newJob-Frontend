<script setup>
import { onMounted } from 'vue'
import { CardJobs, MiniCompanyCard, FilterJobs } from '@/components'
import { ArrowLeftThinCircleOutline, ArrowRightThinCircleOutline, ChevronDown } from '../icons'
import { useJobStore } from '@/stores'

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
    <FilterJobs />
    <div class="mini-company-cards-container">
      <div v-for="n in 13" :key="n">
        <MiniCompanyCard />
      </div>
    </div>
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
      <div class="cards-for" v-for="n in 8" :key="n">
        <h2>Analista de Infraestrutura</h2>
        <div class="cards">
          <ChevronDown size="60px" style="transform: rotate(90deg)" />
          <CardJobs />
          <CardJobs />
          <CardJobs />
          <CardJobs />
          <ChevronDown size="60px" style="transform: rotate(270deg)" />
        </div>
      </div>
    </div>
    <!-- <div class="buttons">
      <ArrowLeftThinCircleOutline
        @click="changeJobs(jobStore.jobs.previous)"
        :class="jobStore.jobs.previous ? `arrow` : `disable arrow`"
      />
      <ArrowRightThinCircleOutline
        @click="changeJobs(jobStore.jobs.next)"
        :class="jobStore.jobs.next ? `arrow` : `disable arrow`"
      />
    </div> -->
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
  font-size: 3em;
  font-weight: 600;
}

.mini-company-cards-container {
  display: flex;
  justify-content: space-between;
  margin: 2vw 0;
}

.img-title {
  width: 90px;
}

.grid-container {
  margin: 3vw 0;
  display: grid;
  /* grid-template-rows: repeat(2, 1fr); */
  gap: 2em;
  justify-items: center;
  align-items: center;

  & .cards-for {
    display: flex;
    flex-direction: column;
    gap: 2em;

    & h2 {
      font-size: 1.8em;
      font-weight: 600;
    }

    & .cards {
      display: flex;
      align-items: center;
      gap: 2em;
      color: var(--branco);
    }
  }
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
