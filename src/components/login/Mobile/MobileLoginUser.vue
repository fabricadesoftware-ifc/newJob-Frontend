<script setup>
import { ref } from 'vue'
import { useAuthStore } from '@/stores/auth'
import { useRouter } from 'vue-router'
import { FormInputComponent } from '@/components'

const email = ref('')
const password = ref('')
const errorMessage = ref(null)

const authStore = useAuthStore()
const router = useRouter()

const handleLogin = async () => {
  try {
    const credentials = { value: email.value, password: password.value }
    await authStore.login(credentials)
    router.push('/')
  } catch (error) {
    errorMessage.value = 'Credenciais inválidas. Tente novamente.'
  }
}
</script>
<template>
  <div class="container">
    <div class="header">
      <img src="https://i.ibb.co/bMMxBzS1/logo.png" alt="logo" />
    </div>
    <form class="form" @submit.prevent="handleLogin">
      <h1>Entrar</h1>
      <div class="info-container">
        <FormInputComponent
          texto="Email"
          type="email"
          placeholder="Digite seu email"
          :model="email"
        />
        <FormInputComponent
          texto="Senha"
          :checkInputPassword="true"
          placeholder="Digite sua senha"
          :model="password"
        />

        <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>

        <div class="buttons-authentication">
          <button class="foget-password-bt">Esqueceu sua senha</button>
          <button class="login-bt" type="submit">Entrar</button>
          <router-link to="/sign-up-user"
            >Não possui conta?
            <span style="color: var(--verde-claro)">Cadaste-se</span></router-link
          >
        </div>
      </div>
    </form>
    <router-link to="/login-business" class="bottom-text"> Sou uma empresa </router-link>
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

.form {
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

.error-message {
  color: #ea4335;
}

.bottom-text {
  display: flex;
  width: 100%;
  justify-content: end;
  margin: 30px;
  color: var(--verde-claro);
  font-weight: 500;
  font-size: 1.2em;
}
</style>
