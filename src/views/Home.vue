'<template>
  <div class="home">
    <!-- <Carousel /> -->
    <div class="container mt-4">
      <CardGrid />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Carousel from '@/components/Carousel.vue'
import CardGrid from '@/components/CardGrid.vue'

export default {
  name: 'Home',
  components: {
    Carousel,
    CardGrid
  }
}
</script>
