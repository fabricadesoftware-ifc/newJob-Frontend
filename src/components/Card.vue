<template>
  <div class="card ">
    <div class="card-image">
      <figure class="image is-4by3">
        <img :src="job.img" alt="Placeholder image" />
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

      <div class="content">
        {{ job.description }}
        <br />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: { job: Object }
}
</script>

<style></style>
