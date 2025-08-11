<script setup>

import { ref } from "vue";
import { useAuthStore } from "@/stores/auth";
import { useRouter } from "vue-router";

const showPassword = ref(false);
const email = ref("");
const password = ref("");
const errorMessage = ref(null);

const authStore = useAuthStore();
const router = useRouter();

const handleLogin = async () => {
  try {
    const credentials = { value: email.value, password: password.value };
    await authStore.login(credentials);
    router.push("/");
  } catch (error) {
    errorMessage.value = "Credenciais inválidas. Tente novamente.";
  }
};
</script>

<template>
  <form class="container" @submit.prevent="handleLogin">
    <h1>Login</h1>

    <label>
      <p>Email</p>
      <div class="input-container">
        <input type="email" v-model="email" required />
        <i class="mdi mdi-check-circle"></i>
      </div>
    </label>

    <label>
      <p>Senha</p>
      <div class="input-container">
        <input :type="showPassword ? 'text' : 'password'" v-model="password" required />
        <i
          class="mdi mdi-check-circle"
          v-if="showPassword"
          @click="showPassword = !showPassword"
        ></i>
        <i
          class="mdi mdi-eye-outline"
          v-if="!showPassword"
          @click="showPassword = !showPassword"
        ></i>
      </div>
    </label>

    <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>

    <button type="submit">Login</button>

    <p>
      Ainda não possui conta?
      <router-link to="/signUp" class="link-text">Crie uma</router-link>
    </p>
  </form>
</template>

<style scoped>
.link-text {
  color: var(--laranja);
  cursor: pointer;
}

.container {
  width: 50%;
  height: 100vh;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-size: 1rem;
}

h1 {
  margin-bottom: 3%;
}

button {
  margin-top: 5%;
  width: 50%;
  background-color: var(--laranja);
  border-radius: 3rem;
  padding: 2% 0;
  font-size: 1rem;
  color: var(--preto);
  font-weight: 600;
}

input {
  width: 90%;
  margin-bottom: 0.3rem;
  font-size: 1rem;
  color: var(--cinza);
  background-color: transparent;
  outline: none;
  border: none;
}

label {
  width: 50%;
}

.input-container {
  color: var(--cinza);
  border: 1px solid var(--cinza);
  border-radius: 0.6rem;
  padding: 1rem 0.5rem 0.7rem 0.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2%;
}

.input-container:focus-within {
  border: 1px solid var(--laranja);
  transition: all 0.2s ease-in-out;
}

.error-message {
  color: red;
  margin-bottom: 1rem;
}
</style>
