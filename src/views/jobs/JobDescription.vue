<template>
  <div class="container">
    <DescriptionHero :job="job"
      ><br /><button class="button is-black mt-2">
        <router-link class="has-text-white " to="/jobs"
          >Inscreva-se</router-link
        >
      </button></DescriptionHero
    >
    <div class="description is-full mt-5">
      <p class="title">{{ job.description }}</p>
      <p class="subtitle"></p>
      <br />
      <div class="center">
        <GoogleMaps :lat="job.lat" :lng="job.lng" />
      </div>
    </div>
  </div>
</template>

<script>
import DescriptionHero from '@/components/jobs-grid/DescriptionHero'
import GoogleMaps from '@/components/google/GoogleMaps'
import jobsApi from '@/services/jobsApi'
export default {
  props: { job: Object },
  components: { DescriptionHero, GoogleMaps },
  data() {
    return {
      job: {}
    }
  },
  async beforeCreate() {
    console.log(this.$route.params.id)
    this.job = await jobsApi.getJob(this.$route.params.id)
    console.log(this.job)
  }
}
</script>

<style></style>
