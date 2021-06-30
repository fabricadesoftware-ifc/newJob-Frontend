<template>
  <div class="center">
    <GmapMap
      :center="{ lat: -20.480925, lng: -54.7055738 }"
      :zoom="10"
      map-type-id="terrain"
      style="margin: auto; height: 400px"
    >
    </GmapMap>
  </div>
</template>
<script>
export default {
  props: { lat: Number, lng: Number }
}
</script>
