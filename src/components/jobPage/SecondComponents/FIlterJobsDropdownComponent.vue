<script setup>
import { FilterVariant, Close, ChevronDown, ChevronUp } from '../../icons'

const lista = ["PJ", "Estágio", "CLT"]
</script>
<template>
  <div class="filter-jobs-container">
    <div class="tilte-container">
      <div class="title">
        <FilterVariant size="20px" />
        <h2>Filtro</h2>
      </div>
      <Close size="22px" />
    </div>
    <div class="hr"></div>
    <div class="select-container">
      <div class="title-select">
        <p>Tipo de contrato</p>
        <p style="color: var(--laranja)">Descartar</p>
      </div>
      <select name="expired" id="expired">
        <option value="teste">Teste</option>
        <option value="teste">Teste</option>
        <option value="teste">Teste</option>
      </select>
    </div>
    <div class="select">
      <div id="category-select">
        <label for="options-view-button">Categoria</label>
        <input type="checkbox" id="options-view-button" />
      </div>

      <div id="select-button">
        <div id="selected-value">Todos</div>
      </div>

      <div id="chevrons">
        <ChevronDown />
        <ChevronUp />
      </div>
    </div>
    <!-- <div class="select-container">
      <div class="title-select">
        <p>Localização</p>
        <p style="color: var(--laranja)">Descartar</p>
      </div>
      <select name="expired" id="expired">
        <option value="teste">Teste</option>
        <option value="teste">Teste</option>
      </select>
    </div>
    <div class="select-container">
      <div class="title-select">
        <p>Requisitos</p>
        <p style="color: var(--laranja)">Descartar</p>
      </div>
      <select name="expired" id="expired">
        <option value="teste">Teste</option>
        <option value="teste">Teste</option>
      </select>
    </div>
    <div class="hr"></div>
    <div class="button-container">
      <button class="button-secondary">Descartar</button>
      <button class="button-default">Aplicar</button>
    </div> -->
  </div>
</template>
<style scoped>
.filter-jobs-container {
  display: flex;
  flex-direction: column;
  border: 1px solid var(--cinza-escuro);
  border-radius: 10px;
  color: var(--branco);
  width: 300px;
  background-color: var(--preto);
  padding: 15px;
  padding-top: 12px;
  gap: 10px; /* mudar pra space-between e tamanho do container fixo */
}

.tilte-container {
  display: flex;
  justify-content: space-between;
  align-items: center;

  & span {
    display: flex;
    align-items: center;
  }

  & .title {
    display: flex;
    gap: 5px;

    & h2 {
      font-size: 15px;
      font-weight: 500;
    }
  }
}

.hr {
  display: flex;
  background-color: var(--cinza-escuro);
  width: 100%;
  height: 1px;
}

.select-container {
  display: flex;
  flex-direction: column;
  gap: 7px;

  & .title-select {
    display: flex;
    justify-content: space-between;
    font-size: 14px;
  }

  & select {
    width: 100%;
    padding: 6px;
    border-radius: 5px;
    border: 1px solid var(--cinza-claro);
    background-color: transparent;
    color: var(--cinza-claro);
    font-size: 14px;

    & option {
      background-color: var(--preto);
    }

    & option:hover {
      background-color: #393939;
    }
  }
}

.button-container {
  display: flex;
  justify-content: space-between;

  & .button-secondary,
  .button-default {
    width: 90px;
    padding: 7px;
    border-radius: 5px;
    border: none;
    cursor: pointer;
  }

  & .button-secondary {
    background-color: transparent;
    border: 1px solid var(--laranja);
    color: var(--laranja);
  }

  & .button-default {
    background-color: var(--laranja);
  }
}
</style>
