'<template>
  <div class="home">
    <Hero
      msg="Eos aperiam in non facilis vitae repellendus sequi vel molestiae. Quo voluptas facere fugiat adipisci molestiae quia. Eum inventore non. Itaque ut aliquid et rerum. Nihil fugit aut qui."
      title="New Job AgriBusiness"
      ><button class="button is-black">
        <router-link class="has-text-white " to="/jobs"
          >Veja nossas vagas</router-link
        >
      </button></Hero
    >
    <div class="container">
      <Tiles class="mt-3" />
      <Supporters class="mb-5" />
    </div>
  </div>
</template>

<script>
import Hero from '../components/Hero'
import Contact from '../components/Contact'
import Tiles from '../components/Tiles'
import Supporters from '../components/Supporters.vue'
export default {
  name: 'Home',
  components: { Hero, Contact, Tiles, Supporters }
}
</script>

<style>
.home {
  /* background-color: lightgray; */
}
</style>
