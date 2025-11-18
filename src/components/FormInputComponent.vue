<script setup>
import { ref } from 'vue'

const showPassword = ref(false)

defineProps({
  texto: String,
  checkInputPassword: {
    checkInputPassword: Boolean,
    default: false
  },
  type: {
    type: String,
    default: 'text'
  },
  placeholder: String
})
</script>
<template>
  <div>
    <p>{{ texto }}</p>
    <div class="input">
      <input
        :type="checkInputPassword ? (showPassword ? 'text' : 'password') : 'type'"
        :placeholder="placeholder" :model="type" required
      />
      <i
        class="mdi mdi-eye-off-outline"
        @click="showPassword = !showPassword"
        v-if="checkInputPassword && !showPassword"
      ></i>
      <i
        class="mdi mdi-eye-outline"
        @click="showPassword = !showPassword"
        v-if="checkInputPassword && showPassword"
      ></i>
    </div>
  </div>
</template>
<style scoped>
p {
  font-size: 1.2em;
  color: var(--branco-escuro);
}

.input {
  display: flex;
  align-items: center;
  background-color: var(--preto-claro);
  padding: 0 15px;
  border-radius: 9px;

  & .mdi {
    height: 20px;
    font-size: 20px !important;
  }

  & input {
    background-color: transparent;
    width: 100%;
    height: 50px;
    border: none;
    color: var(--branco);
  }

  & input:focus {
    outline: none;
  }

  & .mdi,
  input::placeholder {
    color: var(--branco-escuro);
    font-weight: 500;
    font-size: 1.1em;
  }
}

.input:focus-within {
  border: 1px solid var(--cinza);
  transition: all 0.2s ease-in-out;
}
</style>
