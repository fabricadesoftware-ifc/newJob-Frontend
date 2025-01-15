<script setup>
import { Magnify } from "@/components/icons";
</script>

<template>
  <div class="container">
    <label>
      <Magnify />
      <input type="text" />
    </label>
    <button>Todos</button>
    <button>Favoritos</button>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  gap: 1vw;
}

label {
  display: flex;
  width: 25vw;
  min-width: 200px;
  height: 5vh;
  min-height: 20px;
  background-color: #d9d9d9;
  align-items: center;
  border-radius: 16px;
  padding: 0 0.5vw;
  color: #716f6f;

  & span {
    display: flex;
  }

  & input {
    width: 100%;
    background-color: transparent;
    border: none;
    outline: none;
  }
}

button{
    padding: .5vh 1.5vw;
    background-color: #1D4734;
    color: #d9d9d9;
    border: none;
    border-radius: 16px;
}
</style>
