<script setup>
import {
  CheckCircle,
  EyeOffOutline,
  EyeOutline
} from '../icons';

import { ref } from 'vue';

const showPassword = ref(false);
</script>

<template>
  <form class="container">
    <h1>Login</h1>
    <label>
      <p>Email</p>
      <div class="input-container">
        <input type="email">
        <CheckCircle />
      </div>
    </label>
    <label>
      <p>Senha</p>
      <div class="input-container">
        <input type="password">
        <EyeOffOutline v-if="showPassword" @click="showPassword = !showPassword" />
        <EyeOutline v-if="!showPassword" @click="showPassword = !showPassword" />
      </div>
    </label>
    <button>Login</button>
  </form>
</template>

<style scoped>
.container {
  width: 50%;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-size: 1.2rem;
}

h1 {
  margin-bottom: 3%;
}

button {
  margin-top: 5%;
  width: 40%;
  background-color: #E09B6B;
  border-radius: 3rem;
  padding: 2% 0;
  font-size: 1.2rem;
  color: #000000;
  font-weight: 600;
}

input {
  width: 90%;
  margin-bottom: .3rem;
  font-size: 1.2rem;
  color: #716F6F ;
  background-color: transparent;
  outline: none;
  border: none;
  
}
label{
  width: 40%;
}
.input-container {
  color: #716F6F ;
  border: 1px solid #716F6F;
  border-radius: .6rem;
  padding: 1.4rem .5rem 1rem .5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 2%;
}
.input-container:focus-within{
  border: 1px solid #E09B6B;
  transition: all .2s ease-in-out ;
  
}
</style>
