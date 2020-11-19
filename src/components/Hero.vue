'<template>
  <section class="hero primary is-fullheight-with-navbar">
    <div class="hero-body">
      <div class="container has-text-centered">
        <h1 class="title">{{ title }}</h1>
        <p>{{ msg }}</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Hero',
  components: {},
  props: {
    msg: String,
    title: String
  }
}
</script>

<style>
.primary {
  background-image: url('http://videira.ifc.edu.br/wp-content/uploads/2019/05/42-38460006910_84e5a9ec99_b.jpg');
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
