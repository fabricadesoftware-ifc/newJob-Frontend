<script setup>
import { Magnify, FilterVariant, FilterVariantRemove } from '@/components/icons'
</script>
<template>
  <div class="container-top">
    <div class="search-bar">
      <Magnify />
      <input type="text" />
    </div>
    <button class="filter-button-activated">
      <FilterVariant />
    </button>
    <button class="filter-button-default">
      <FilterVariantRemove />
    </button>
    <button class="filter-button-favorite">Favoritos</button>
    <p>- 527 vagas encontradas</p>
  </div>
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
  padding: 5px 10px;
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
  padding: 8px;
  height: 2vw;
  border-radius: 10px;
  font-size: 16px;

  & span {
    display: flex;
    align-items: center;
    justify-content: center;
  }
}

.filter-button-default {
  color: var(--branco);
  border: 1px solid var(--cinza-escuro);
}

.filter-button-activated {
  background-color: var(--verde-claro);
}

.filter-button-favorite {
  padding: 0 20px;
  border: 1px solid var(--cinza-escuro);
}

p {
    font-size: 20px;
    font-weight: 500;
}
</style>
