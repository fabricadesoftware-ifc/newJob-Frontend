<template>
  <div class="center">
    <GmapMap
      :center="{ lat, lng }"
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
