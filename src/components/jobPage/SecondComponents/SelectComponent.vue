<script setup>
import { ref } from 'vue'
import { ChevronDown, ChevronUp } from '../../icons'
const lista = ['PJ', 'Estágio', 'CLT']

const showIcon = ref(false)
</script>
<template>
  <div class="select-container">
    <div class="title-container">
      <p>Tipo de contrato</p>
      <p style="color: var(--laranja); cursor: pointer;">Descartar</p>
    </div>
    <div class="select" @click="showIcon = !showIcon">
      <div class="selected-value">Todos</div>
      <div class="chevrons">
        <ChevronDown size="20" v-if="!showIcon" />
        <ChevronUp size="20" v-if="showIcon" />
      </div>
    </div>
    <div class="options-container" v-if="showIcon">
      <div class="option" v-for="opcao in lista">
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
