<script setup>
import { ref } from 'vue'

const showModal = ref(false)
const props = defineProps(['text', 'array'])

const selectedOption = ref(0)
</script>
<template>
  <div class="select-container">
    <div class="title-container">
      <p>{{ text }}</p>
      <p style="color: var(--laranja); cursor: pointer" @click="selectedOption = 0">Descartar</p>
    </div>
    <div class="select" @click="showModal = !showModal">
      <div class="selected-value">{{!selectedOption? 'Todos': array[selectedOption]}}</div>
      <div class="chevrons">
        <i class="mdi mdi-chevron-down" v-if="!showModal"></i>
        <i class="mdi mdi-chevron-up" v-if="showModal"></i>
      </div>
    </div>
    <div class="options-container" v-if="showModal">
      <div class="option" v-for="(opcao, index) in array" :key="index" @click="selectedOption = index, showModal = false">
        {{ opcao }}
      </div>
    </div>
  </div>
</template>
<style scoped>
.select-container {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 7px;

  & .title-container {
    display: flex;
    justify-content: space-between;
    font-size: 14px;
  }

  & .select {
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: var(--cinza-claro);

    & .selected-value {
      font-size: 0.875rem;
    }

    & .chevrons span {
      display: flex;
      align-items: center;
    }
  }

  & .options-container {
    padding: 0.2rem;
    z-index: 4;
    position: absolute;
    top: 70px;
    width: 292px;
    background-color: var(--preto);

    & .option {
      padding: 0.4rem 0.6rem;
      border-radius: 0.2rem;
      font-size: 13px;
    }
    & .option:hover {
      background-color: #393939;
    }
  }
}

.select,
.options-container {
  border: 1px solid var(--cinza-claro);
  margin-top: 0.3rem;
  border-radius: 0.375rem;
  padding: 0.4rem 0.6rem;
  font-size: 15px;
}
</style>
