<template>
  <div class="columns center is-one-third">
    <div v-for="column in columnNumber" :key="column" class="column">
      <Card v-for="job in content" :key="job.id" :job="job" />
    </div>
  </div>
</template>

<script>
import Card from './Card'
export default {
  name: 'CardGrid',
  components: { Card },
  data() {
    return {
      content: [
        {
          id: 1,
          company: 'IFC',
          img:
            'https://64.media.tumblr.com/7c34747877409694e112bc2f772fdfed/c9b392ccbf2098ab-62/s640x960/876be844c75bc0133e3bc24c0f9b1349c4022877.jpg',
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
  },
  computed: {
    columnNumber: function() {
      return Math.round(this.content.length / 2)
    }
  }
}
</script>

<style></style>
