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
  props: { content: Array },
  computed: {
    columnNumber: function() {
      return Math.round(this.content.length / 2)
    }
  }
}
</script>

<style></style>
