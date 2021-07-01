'<template>
  <section class="hero is-warning is-halfheight ">
    <div class="hero-body">
      <div class="container has-text-centered has-text-white">
        <h1 class="title has-text-white">{{ job.role }}</h1>
        <small>{{ job.local }}</small>
        <br />
        <span>{{ job.description }}</span>
        <slot></slot>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'DescriptionHero',
  components: {},
  props: {
    job: Object
  }
}
</script>

<style></style>
