<template>
  <div class="JobGrid">
    <div class="carousel mb-4">
      <Carousel :jobs="jobs" />
    </div>
    <div class="container">
      <div class="center is-one-third columns">
        <div>
          <SideMenu class="column" />
        </div>
        <div class="column">
          <Card v-for="(job, id) in jobs" :key="id" :job="job">
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
import { mapState, mapActions } from 'vuex'

import Carousel from '@/components/jobs-grid/Carousel'
import CardGrid from '@/components/jobs-grid/CardGrid'
import SideMenu from '@/components/jobs-grid/SideMenu'
import Card from '@/components/jobs-grid/JobCard'
import JobModal from './JobModal.vue'
export default {
  components: { Carousel, CardGrid, Card, SideMenu, JobModal },
  mounted() {
    this.test = false
  },
  data() {
    return {
      job: {},
      test: true
    }
  },
  computed: {
    ...mapState('jobs', ['jobs'])
  },
  created() {
    this.fetchJobs()
  },

  methods: {
    ...mapActions('jobs', ['fetchJobs']),
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
