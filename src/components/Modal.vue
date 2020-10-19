<template>
  <section>
    <button class="button is-small " @click="isCardModalActive = true">
      Details
    </button>

    <b-modal v-model="isCardModalActive" :width="640" scroll="keep">
      <div class="card">
        <div class="card-image">
          <figure class="image is-4by3">
            <img :src="job.img" alt="Image" />
          </figure>
        </div>
        <div class="card-content">
          <div class="media">
            <div class="media-content">
              <p class="title is-4">{{ job.company }}</p>
              <p class="subtitle is-6">{{ job.description }}</p>
            </div>
          </div>

          <small>{{ job.date }}</small>
        </div>
      </div>
    </b-modal>
  </section>
</template>

<script>
export default {
  props: { job: Object },
  data() {
    return {
      isImageModalActive: false,
      isCardModalActive: false
    }
  }
}
</script>
