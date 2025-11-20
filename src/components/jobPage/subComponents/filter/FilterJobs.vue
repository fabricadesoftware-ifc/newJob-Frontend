<script setup>
import { ref } from 'vue'
import { FilterJobsDropdownComponent } from '@/components';

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
  border: 1px solid var(--cinza-escuro);
  color: var(--cinza-escuro);
  display: flex;
  padding: .3vw .6vw;
  border-radius: 10px;
  gap: 10px;
  width: 23vw;

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

.search-bar:focus-within {
  border: 1px solid var(--cinza-claro);
  color: var(--cinza-claro);
}

.filter-button-activated,
.filter-button-default,
.filter-button-favorite {
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--branco);
  background-color: transparent;
  padding: .4vw;
  height: 2vw;
  border-radius: 10px;
  cursor: pointer;
  font-size: .9vw;

  & span {
    display: flex;
    align-items: center;
    justify-content: center;
  }
}

.filter-button-default:hover, .filter-button-favorite:hover {
  background-color: #282828;
}

.filter-button-default {
  color: var(--branco);
  border: 1px solid var(--cinza-escuro);
}

.filter-button-activated {
  background-color: var(--verde-claro);
}

.filter-button-favorite {
  padding: 0 1.3vw;
  border: 1px solid var(--cinza-escuro);
}

p {
  font-size: 1.2vw;
  font-weight: 500;
}
</style>
