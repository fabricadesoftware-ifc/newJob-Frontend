<template>
  <div class="card columns mb-5">
    <div class="column card-image is-one-fifth">
      <figure class="image is-1by1">
        <img class="card-image" :src="job.img" alt="Placeholder image" />
      </figure>
      <small>Data de anúncio: {{ job.date }}</small>
    </div>
    <div class="card-content column">
      <div class="media">
        <div class="media-content">
          <p class="title mt-3 is-5">{{ job.company }}</p>
        </div>
      </div>
      <div class="content">
        {{ job.description }}
      </div>
      <br />
      <button><Modal :job="job" /></button>
    </div>
  </div>
</template>

<script>
import Modal from './Modal'
export default {
  components: { Modal },
  props: { job: Object }
}
</script>

<style>
.card {
  /* background-color: #d3d3d3; */
  /* background-color: #0000; */
  background-color: blue;
  color: blue;
}

.card-image {
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}
</style>
