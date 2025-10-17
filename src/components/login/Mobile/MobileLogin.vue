<script setup>
import { ref } from 'vue'
const showPassword = ref(true)
</script>
<template>
  <div class="container">
    <div class="header">
      <img src="https://i.ibb.co/bMMxBzS1/logo.png" alt="logo" />
    </div>
    <div class="body">
      <h1>Entrar</h1>
      <div class="info-container">
        <div>
          <p>Email</p>
          <div class="input">
            <input type="email" placeholder="Digite o seu email" />
          </div>
        </div>
        <div>
          <p>Senha</p>
          <div class="input">
            <input type="password" placeholder="Digite sua senha" v-if="showPassword"/>
            <input type="text" placeholder="Digite sua senha" v-if="!showPassword">
            <i class="mdi mdi-eye-off-outline" @click="showPassword = !showPassword" v-if="showPassword"></i>
            <i class="mdi mdi-eye-outline" @click="showPassword = !showPassword" v-if="!showPassword"></i>
          </div>
        </div>
        <div class="buttons">
          <button class="foget-password-bt">Esqueceu sua senha</button>
          <button class="login-bt">Entrar</button>
          <p>Não possui senha? <span style="color: var(--verde-claro)">Cadaste-se</span></p>
        </div>
      </div>
    </div>
    <div class="bottom-text">
      <p>Sou uma empresa</p>
    </div>
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
  height: 44px;
  display: flex;
  align-items: center;
  width: 100%;

  & img {
    width: 200px;
    max-width: 25vw;
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

  & p {
    font-size: 1.2em;
    color: var(--branco-escuro);
  }

  & .input {
    display: flex;
    background-color: var(--preto-claro);
    padding: 15px;
    border-radius: 7px;

    & .mdi {
      height: 20px;
    }

    & input {
      background-color: transparent;
      width: 100%;
      border: none;
    }

    & input:focus {
      outline: none;
    }

    & .mdi,
    input::placeholder {
      color: var(--branco-escuro);
      font-weight: 500;
    }
  }
}

.buttons {
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

  & p {
    font-weight: 500;
    font-size: 1.1em;
  }
}

.bottom-text {
  display: flex;
  width: 100%;
  justify-content: end;
  margin: 30px;
  p {
    color: var(--verde-claro);
    font-weight: 500;
    font-size: 1.1em;
  }
}
</style>
