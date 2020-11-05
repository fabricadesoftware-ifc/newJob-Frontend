<template>
  <div class="JobGrid">
    <div class="carousel mb-4">
      <Carousel :jobs="content" />
    </div>
    <div class="jobs container">
      <CardGrid :content="content" />
    </div>
  </div>
</template>

<script>
import Carousel from '../components/Carousel'
import CardGrid from '../components/CardGrid'
export default {
  components: { Carousel, CardGrid },
  data() {
    return {
      content: [
        {
          id: 1,
          company: 'IFC',
          img:
            'https://64.media.tumblr.com/579fe09790669fac0ec89720631da87b/tumblr_oqrikjbSCw1vmg74ho1_400.jpg',
          date: '10-10-2020',
          description: 'Descrição 1 Descrição 1 Descrição 1 '
        },
        {
          id: 2,
          company: 'IFC',
          img:
            'https://64.media.tumblr.com/579fe09790669fac0ec89720631da87b/tumblr_oqrikjbSCw1vmg74ho1_400.jpg',
          date: '10-10-2020',
          description: 'Descrição 2 Descrição 2 Descrição 2 '
        },
        {
          id: 3,
          company: 'IFC',
          img:
            'https://64.media.tumblr.com/170a02f225f016be7f81ac5fdd7ec5fe/67572ec05606bf32-2a/s400x600/d8df5c8591c0a284d632831e67fe4f1a689f06d9.jpg',
          date: '10-10-2020',
          description: 'Descrição 3 Descrição 3 Descrição 3 '
        },
        {
          id: 4,
          company: 'IFC',
          img:
            'https://64.media.tumblr.com/170a02f225f016be7f81ac5fdd7ec5fe/67572ec05606bf32-2a/s400x600/d8df5c8591c0a284d632831e67fe4f1a689f06d9.jpg',
          date: '10-10-2020',
          description: 'Descrição 3 Descrição 3 Descrição 3 '
        },
        {
          id: 5,
          company: 'IFC',
          img:
            'https://64.media.tumblr.com/170a02f225f016be7f81ac5fdd7ec5fe/67572ec05606bf32-2a/s400x600/d8df5c8591c0a284d632831e67fe4f1a689f06d9.jpg',
          date: '10-10-2020',
          description: 'Descrição 3 Descrição 3 Descrição 3 '
        }
      ]
    }
  }
}
</script>

<style></style>
