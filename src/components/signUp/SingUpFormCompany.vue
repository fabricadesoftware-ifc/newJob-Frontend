<script setup>
import { ref } from 'vue';
import { CheckCircle } from '../icons';

const name = ref('');
const fantasyName = ref('');
const email = ref('');
const phone = ref('');
const address = ref('');
const city = ref('');

const registerCompany = async () => {
    console.log("Registering company");
};
</script>

<template>
    <form class="container" @submit.prevent="registerCompany"> 
        <h1>Cadastro de Empresa</h1>
        
        <label>
            <p>Nome</p>
            <div class="input-container">
                <input type="text" v-model="name" required>
            </div>
        </label>

        <label>
            <p>Nome Fantasia</p>
            <div class="input-container">
                <input type="text" v-model="fantasyName" required>
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
            <p>Telefone</p>
            <div class="input-container">
                <input type="tel" v-model="phone" required>
            </div>
        </label>

        <label>
            <p>Endereço</p>
            <div class="input-container">
                <input type="text" v-model="address" required>
            </div>
        </label>

        <label>
            <p>Cidade</p>
            <div class="input-container">
                <input type="text" v-model="city" required>
            </div>
        </label>

        <button type="submit">Cadastrar Empresa</button>
    </form>
</template>

<style scoped>
.link-text {
    color: #E09B6B;
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
    background-color: #E09B6B;
    border-radius: 3rem;
    padding: 2% 0;
    font-size: 1rem;
    color: #000000;
    font-weight: 600;
}

input {
    width: 90%;
    margin-bottom: .3rem;
    font-size: 1rem;
    color: #716F6F;
    background-color: transparent;
    outline: none;
    border: none;
}

label {
    width: 50%;
}

.input-container {
    color: #716F6F;
    border: 1px solid #716F6F;
    border-radius: .6rem;
    padding: 1rem .5rem .7rem .5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 2%;
}

.input-container:focus-within {
    border: 1px solid #E09B6B;
    transition: all .2s ease-in-out;
}
</style>
