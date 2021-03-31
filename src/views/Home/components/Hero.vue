'<template>
  <section class="hero primary is-fullheight-with-navbar">
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
  /* background-image: url('http://videira.ifc.edu.br/wp-content/uploads/2019/05/42-38460006910_84e5a9ec99_b.jpg'); */
  background-image: url('https://images.squarespace-cdn.com/content/v1/5acbd3147c93273e08d7c923/1523632078744-LNNMSK91VO6VPD5YCLFZ/ke17ZwdGBToddI8pDm48kOGCqg5HiGQZ9z4EaVG4imF7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UXRLR3zFpDUBCNM8ZkldC67NeEPgyhndNmWqzqjh6YHyArRUwoSl4wuUs73k4k9WwA/9.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
}
</style>
