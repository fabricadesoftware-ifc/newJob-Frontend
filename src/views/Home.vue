'<template>
  <div class="home">
    <!-- <Carousel /> -->
    <CardGrid />
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
