<template>
  <div class="JobGrid">
    <div class="carousel mb-4">
      <Carousel :jobs="content" />
    </div>
    <div class="container">
      <div class="center is-one-third columns">
        <!-- TODO: Adicionar filtros funcionais -->
        <!-- <div>
          <SideMenu class="column" />
        </div> -->
        <div class="column">
          <Card v-for="(job, id) in content" :key="id" :job="job">
            <button
              class="button"
              @click="handlePreVisualization(job)"
              type="button"
            >
              Detalhes
            </button>
          </Card>
        </div>
        <div v-if="test" class="column"><JobModal :job="job" /></div>
      </div>
    </div>
  </div>
</template>

<script>
import Carousel from '@/components/jobs-grid/Carousel'
import CardGrid from '@/components/jobs-grid/CardGrid'
import SideMenu from '@/components/jobs-grid/SideMenu'
import Card from '@/components/jobs-grid/JobCard'
import JobModal from './JobModal.vue'
import jobsApi from '@/services/jobsApi'
export default {
  components: { Carousel, CardGrid, Card, SideMenu, JobModal },
  mounted() {
    this.test = false
  },
  data() {
    return {
      job: {},
      test: true,
      content: []
    }
  },
  async beforeCreate() {
    this.content = await jobsApi.getJobs()
    console.log(this.content)
  },

  methods: {
    handlePreVisualization(job) {
      this.test = !this.test
      this.job = job
    },
    handlePrint(job) {
      this.$router.push({
        path: `/job-description/${job.id}`,
        params: { id: job.id }
      })
    }
  }
}
</script>

<style></style>
