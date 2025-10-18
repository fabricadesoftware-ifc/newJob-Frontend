<script setup>
defineProps({
  texto: String,
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
      <input :type="type" :placeholder="placeholder" />
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
  background-color: var(--preto-claro);
  padding: 0 15px;
  border-radius: 9px;

  & .mdi {
    height: 20px;
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
  }
}

.input:focus-within {
  border: 1px solid var(--cinza);
  transition: all 0.2s ease-in-out;
}
</style>
