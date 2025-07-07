<script setup>
import { ref } from 'vue';
import { CheckCircle } from '../icons';
import { useAuthStore } from '@/stores/auth'; 
import { useRouter } from 'vue-router';

const router = useRouter()

const username = ref('');
const email = ref('');
const password = ref('');
const confirmPassword = ref('');
const message = ref('');

const authStore = useAuthStore();

const registerUser = async () => {
    if (password.value !== confirmPassword.value) {
        message.value = "As senhas não correspondem!";
        return;
    }

    try {
        const userData = {
            username: username.value, 
            email: email.value,
            password: password.value,
        };

        const response = await authStore.register(userData); 
        router.push("/login")
        message.value = response.message || "Usuário registrado com sucesso!"; 

    } catch (error) {
        if (error.response && error.response.data) {
            message.value = "Erro ao registrar o usuário: " + error.response.data.message;
        } else {
            message.value = "Erro desconhecido ao registrar o usuário.";
        }
    }
};
</script>

<template>
    <form class="container" @submit.prevent="registerUser"> 
        <h1>Cadastro</h1>
        <label>
            <p>Nome</p>
            <div class="input-container">
                <input type="text" v-model="username" required>
            </div>
        </label>
        <label>
            <p>Email</p>
            <div class="input-container">
                <input type="email" v-model="email" required>
                <CheckCircle />
            </div>
        </label>
        <label>
            <p>Senha</p>
            <div class="input-container">
                <input type="password" v-model="password" required>
            </div>
        </label>
        <label>
            <p>Confirme senha</p>
            <div class="input-container">
                <input type="password" v-model="confirmPassword" required>
            </div>
        </label>
        <button type="submit">Criar conta</button>
        <p v-if="message">{{ message }}</p> <!-- Exibe a mensagem -->
        <p>Já possui conta?
            <router-link to="/login" class="link-text">Faça login</router-link>
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
    color: var(--preto-escuro);
    font-weight: 600;
}

input {
    width: 90%;
    margin-bottom: .3rem;
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
    border-radius: .6rem;
    padding: 1rem .5rem .7rem .5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 2%;
}

.input-container:focus-within {
    border: 1px solid var(--laranja);
    transition: all .2s ease-in-out;
}
</style>
