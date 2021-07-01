<template>
  <div class="card">
    <DescriptionHero :job="job"
      ><br /><button class="button is-black mt-2">
        <router-link class="has-text-white " :to="'/job-description/' + job.id"
          >Cadastre-se</router-link
        >
      </button></DescriptionHero
    >
    <div class="description is-full mt-5">
      <p class="title">{{ job.local }}</p>
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
export default {
  name: 'JobModal',
  components: { DescriptionHero, GoogleMaps },
  props: { job: Object },
  data() {
    return {}
  }
}
</script>

<style></style>
