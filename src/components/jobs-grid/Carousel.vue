<template>
  <section>
    <b-carousel
      :arrow="arrow"
      :repeat="arrowBoth"
      :arrow-hover="arrowHover"
      :icon-pack="iconPack"
      :icon-prev="iconPrev"
      :icon-next="iconNext"
      :icon-size="iconSize"
    >
      <b-carousel-item v-for="(job, i) in jobs" :key="i">
        <section :class="`hero is-medium is-success`">
          <div class="hero-body has-text-centered">
            <h1 class="title">{{ job.company.name }} - {{}}</h1>
            <span>{{ job.description }}</span>
            <br />
            <small> Postada: {{ job.deadline }}</small>
          </div>
        </section>
      </b-carousel-item>
    </b-carousel>
  </section>
</template>

<script>
export default {
  name: 'Carousel',
  props: { jobs: Array },
  data() {
    return {
      arrow: true,
      arrowBoth: true,
      arrowHover: true,
      iconPack: 'mdi',
      iconPrev: 'arrow-left',
      iconNext: 'arrow-right',
      iconSize: 'is-small'
    }
  }
}
</script>

c
