<script setup></script>

<template>
  <div class="container">
    <div class="candidate-info">
      <img src="" alt="" />
      <p>Natasha Russo dos Santos</p>
    </div>
    <button>Ver perfil</button>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  border: 1px solid #505050;
  background-color: #242424;
  padding: 10px;
  border-radius: 10px;
  width: 15vw;
  margin: 4vh 0 0 auto;
  height: fit-content;

  & .candidate-info {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1vh;
    padding: 2vh 1vw;
    max-width: 100%;
    text-align: center;
    border: 1px solid #505050;
    border-radius: 10px;
    background-color: #1e1e1e;

    & img {
      width: 100px;
      height: 100px;
      border-radius: 50%;
      background-color: #1D4734;
    }
  }

  & button {
    margin-top: 2vh;
    background-color: #e09b6b;
    color: #000000;
    font-weight: 600;
    border-radius: 17px;
    padding: 1vh 2vw;
    border: none;
    outline: none;
  }
}
</style>
