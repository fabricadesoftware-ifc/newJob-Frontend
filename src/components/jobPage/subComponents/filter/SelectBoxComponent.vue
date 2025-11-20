<script setup>
const lista = ['PJ', 'Estágio', 'CLT']
</script>
<template>
  <div class="select-container">
    <div class="title-container">
      <p>Requisitos</p>
      <p style="color: var(--laranja); cursor: pointer">Descartar</p>
    </div>
    <div class="select">
      <div class="selected-value">
        <div class="box">
          <p>PHP</p>
          <i class="mdi mdi-close"></i>
        </div>
        <div class="box">
          <p>Arquitetura de computadores</p>
          <i class="mdi mdi-close"></i>
        </div>
        <div class="box">
          <p>MySQL</p>
          <i class="mdi mdi-close"></i>
        </div>
        <div class="box">
          <p>Proatividade</p>
          <i class="mdi mdi-close"></i>
        </div>
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
    border: 1px solid var(--cinza-claro);
    margin-top: 0.3rem;
    border-radius: 0.375rem;
    padding: 0.25rem 0.6rem;
    font-size: 15px;

    & .selected-value {
      font-size: 0.875rem;
    }
  }
}

.selected-value {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.box {
  background-color: rgba(224, 155, 107, 0.2);
  border: 1px solid var(--laranja);
  padding: 3px 8px;
  border-radius: 20px;
  font-size: 12px;
  display: flex;
  align-items: center;
  justify-content: center;

  & p,
  span {
    color: var(--laranja);
  }

  & span {
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>
