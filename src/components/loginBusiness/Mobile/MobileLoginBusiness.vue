<script setup>
import { FormInputComponent } from '@/components'

</script>
<template>
  <div class="container">
    <div class="header">
      <img src="https://i.ibb.co/bMMxBzS1/logo.png" alt="logo" />
    </div>
    <div class="body">
      <h1>Entrar</h1>
      <div class="info-container">
        <FormInputComponent texto="Email" type="email" placeholder="Digite seu email" />
        <FormInputComponent
          texto="Senha"
          :checkInputPassword="true"
          placeholder="Digite sua senha"
          :model="password"
        />
        <div class="buttons-authentication">
          <button class="foget-password-bt">Esqueceu sua senha</button>
          <button class="login-bt">Entrar</button>
          <router-link to="/sign-up-business"
            >Não possui conta?
            <span style="color: var(--verde-claro)">Cadaste-se</span></router-link
          >
        </div>
      </div>
    </div>
    <router-link to="/login-user" class="bottom-text">Procuro emprego</router-link>
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
