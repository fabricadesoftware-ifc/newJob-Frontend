'<template>
  <section class="hero is-warning is-halfheight ">
    <div class="hero-body">
      <div class="container has-text-centered has-text-white">
        <h1 class="title has-text-white">{{ title }}</h1>
        <span>{{ msg }}</span>
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
    msg: String,
    title: String
  }
}
</script>

<style></style>
