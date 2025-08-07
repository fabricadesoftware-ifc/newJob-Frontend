<script setup>
defineProps({
  texto: String
})
</script>
<template>
  <div class="hoverbox">{{ texto }}</div>
</template>
<style scoped>
.hoverbox {
  display: flex;
  justify-content: center;
  position: absolute;
  z-index: 4;
  white-space: nowrap;
  padding: 5px 10px;
  border-radius: 5px;
  font-size: 0.8rem;
  font-weight: 600;
  top: 145%;
  background-color: var(--preto-claro);
  color: var(--branco-escuro);
  opacity: 0;
  transition: opacity 0.3s ease;
}
</style>
