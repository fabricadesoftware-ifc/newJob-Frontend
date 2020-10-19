<template>
  <div class="card ">
    <div class="card-image">
      <figure class="image is-4by3">
        <img class="card-image" :src="job.img" alt="Placeholder image" />
      </figure>
    </div>
    <div class="card-content">
      <div class="media">
        <div class="media-content">
          <p class="title is-5">{{ job.company }}</p>
        </div>
      </div>
      <strong>{{ job.date }}</strong>
      <br />
      <button><Modal :job="job" /></button>
      <div class="content">
        {{ job.description }}
      </div>
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
  background-color: #0000;
  color: #0000;
}

.card-image {
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}
</style>
