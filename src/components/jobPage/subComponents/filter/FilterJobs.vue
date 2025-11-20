<script setup>
import { ref } from 'vue'
import { FilterJobsDropdownComponent } from '@/components'

const showFilter = ref(false)
</script>
<template>
  <div class="container-top">
    <div class="search-bar">
      <i class="mdi mdi-magnify"></i>
      <input type="text" />
    </div>
    <button class="filter-button-activated" @click="showFilter = !showFilter">
      <i class="mdi mdi-filter-variant"></i>
    </button>
    <button class="filter-button-default">
      <i class="mdi mdi-filter-variant-remove"></i>
    </button>
    <button class="filter-button-favorite">Favoritos</button>
    <p>- 527 vagas encontradas</p>
  </div>
  <FilterJobsDropdownComponent v-if="showFilter" @close="showFilter = !showFilter" />
</template>
<style scoped>
.container-top {
  display: flex;
  gap: 10px;
  margin: 3vw 0;
  align-items: center;
}

.search-bar {
  color: var(--branco-escuro);
  background-color: var(--preto-claro);
  display: flex;
  padding: 0 1rem;
  border-radius: 10px;
  width: 20vw;

  & span {
    display: flex;
    align-items: center;
  }

  & input {
    width: 100%;
    background-color: transparent;
    color: var(--branco);
    border: none;
    outline: none;
  }
}

.filter-button-activated,
.filter-button-default,
.filter-button-favorite {
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--branco);
  padding: 0 .5em;
  height: 2em;
  border-radius: 10px;
  cursor: pointer;
  font-size: 0.9vw;

  & span {
    display: flex;
    align-items: center;
    justify-content: center;
  }
}

.filter-button-default, .filter-button-favorite {
  background-color: var(--preto-claro);
}

.filter-button-activated {
  background-color: var(--verde);
}

.filter-button-favorite {
  padding: 0 1.1em;
}

p {
  font-size: 1.2em;
  font-weight: 500;
}
</style>
