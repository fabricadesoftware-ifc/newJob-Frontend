<script setup>
defineProps({
  texto: String
})
</script>
<template>
  <button>{{ texto }}</button>
</template>
<style scoped>
button {
  border-radius: 9px;
  padding: 10px;
  width: 100%;
}
</style>
