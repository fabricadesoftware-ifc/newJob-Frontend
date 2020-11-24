<template>
  <div class="center is-one-third columns">
    <div>
      <SideMenu class="column" />
    </div>
    <div class="column">
      <Card v-for="job in content" :key="job.id" :job="job" />
    </div>
  </div>
</template>

<script>
import Card from './Card'
import SideMenu from './SideMenu'
export default {
  name: 'CardGrid',
  components: { Card, SideMenu },
  props: { content: Array },
  computed: {
    columnNumber: function() {
      return Math.round(this.content.length / 2)
    }
  }
}
</script>

<style></style>
