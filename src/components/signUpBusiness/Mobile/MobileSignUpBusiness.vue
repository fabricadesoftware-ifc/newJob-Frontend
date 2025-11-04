<script setup>
import { ref } from 'vue'
import {
  FormInputComponent,
  FirstStepSignUpComponent,
  SecondStepSignUpComponent
} from '@/components'

const showPassword = ref(false)
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
        <FirstStepSignUpComponent v-if="step == 1"/>
        <SecondStepSignUpComponent v-if="step == 2"/>
        <!-- <FormInputComponent texto="Nome" placeholder="Digite seu nome" />
        <FormInputComponent texto="Nome fantasia" placeholder="Digite o nome fantasia da empresa" />
        <FormInputComponent texto="CNPJ" type="text" placeholder="Digite o CNPJ" />
        <FormInputComponent
          texto="Senha"
          :type="showPassword ? 'text' : 'password'"
          placeholder="Digite sua senha"
        >
          <i
            class="mdi mdi-eye-off-outline"
            @click="showPassword = !showPassword"
            v-if="showPassword"
          ></i>
          <i
            class="mdi mdi-eye-outline"
            @click="showPassword = !showPassword"
            v-if="!showPassword"
          ></i>
        </FormInputComponent> -->
        <div class="button-container">
          <button class="foget-password-bt" @click="voltarFormulario" v-if="step == 2">Voltar</button>
          <button class="login-bt" @click="continuarFormulario" v-if="step == 1">Continuar</button>
          <button class="login-bt" @click="continuarFormulario" v-else>Cadastrar-se</button>
          <router-link to="/sign-up-business"
            >Não possui conta?
            <span style="color: var(--verde-claro)">Cadaste-se</span></router-link
          >
        </div>
      </div>
    </div>
    <router-link class="bottom-text">Procuro emprego</router-link>
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

.button-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;

  & .foget-password-bt {
    background-color: transparent;
    border: none;
    color: var(--verde-claro);
    border: var(--verde) 1px solid;
  }

  & .login-bt {
    background: #0e301c;
    background: linear-gradient(
      90deg,
      rgba(14, 48, 28, 1) 0%,
      rgba(7, 115, 75, 1) 50%,
      rgba(14, 48, 28, 1) 100%
    );
    border: none;
    color: var(--branco);
  }

  & .foget-password-bt,
  .login-bt {
    border-radius: 9px;
    padding: 10px;
    width: 100%;
  }

  & a {
    color: var(--branco-escuro);
    font-weight: 500;
    font-size: 1.1em;
  }
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
