<script setup>
import { ref } from 'vue'
import { FirstStepSignUpComponent, SecondStepSignUpComponent } from '@/components'
const step = ref(1)

function continuarFormulario() {
  if (step.value == 1) {
    step.value += 1
  }
}

function voltarFormulario() {
  step.value -= 1
}
</script>
<template>
  <div class="container">
    <div class="header">
      <img src="https://i.ibb.co/bMMxBzS1/logo.png" alt="logo" />
    </div>
    <div class="body">
      <h1>Cadastro</h1>
      <div class="info-container">
        <FirstStepSignUpComponent v-if="step == 1" />
        <SecondStepSignUpComponent v-if="step == 2" />
        <div class="buttons-authentication">
          <div class="progress-container" v-if="step == 1">
            <label class="progress"></label>
            <label class="to-finish"></label>
          </div>
          <div class="progress-container" v-if="step == 2">
            <label class="to-finish"></label>
            <label class="progress"></label>
          </div>
          <button class="foget-password-bt" @click="voltarFormulario" v-if="step == 2">
            Voltar
          </button>
          <button class="login-bt" @click="continuarFormulario" v-if="step == 1">Continuar</button>
          <button class="login-bt" @click="continuarFormulario" v-else>Cadastrar-se</button>
          <router-link to="/sign-up-business"
            >Não possui conta?
            <span style="color: var(--verde-claro)">Cadaste-se</span></router-link
          >
        </div>
      </div>
    </div>
    <router-link class="bottom-text" to="/sign-up-user">Procuro emprego</router-link>
  </div>
</template>
<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 100vh;
  padding: 0 20px;
  background-image: radial-gradient(circle, #242424, #1e1e1e, #191819, #131212, #0b0a0a);
}

.header {
  height: 39px;
  padding: 5px;
  display: flex;
  align-items: center;
  width: 100%;

  & img {
    width: 200px;
    max-width: 23vw;
  }
}

.body {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: 40px;

  & h1 {
    font-weight: 600;
    font-size: 2.9rem;
  }
}

.info-container {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 25px;
}

.bottom-text {
  display: flex;
  width: 100%;
  justify-content: end;
  margin: 30px;
  color: var(--verde-claro);
  font-weight: 500;
  font-size: 1.1em;
}
</style>
