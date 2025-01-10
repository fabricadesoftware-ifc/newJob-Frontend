<script setup>
import { ref } from "vue";

const fileName = ref();

function changeFileName(file) {
  fileName.value = file.srcElement.files[0].name;
}
</script>

<template>
  <div class="container">
    <h1>Informações</h1>
    <div class="profile-image">
      <img src="" alt="" />
      <button>Alterar</button>
    </div>
    <div class="info-container">
      <div class="info">
        <p>Nome</p>
        <input type="text" />
      </div>
      <div class="info">
        <p>Nome Fantasia</p>
        <input type="text" />
      </div>
      <div class="info">
        <p>Email</p>
        <input type="text" />
      </div>
      <div class="info">
        <p>Cidade</p>
        <input type="text" />
      </div>
      <div class="info">
        <p>Telefone</p>
        <input type="text" />
      </div>
      <div class="info">
        <p>Endereço</p>
        <input type="text" />
      </div>
      <div class="info">
        <p>Sobre</p>
        <textarea />
      </div>
      <div class="last-info">
        <p>Ramo</p>
        <select name="select">
          <option :value="1">Técnologia</option>
          <option :value="2">Financeiro</option>
          <option :value="3">Saúde</option>
          <option :value="4">Educação</option>
          <option :value="5">Comércio</option>
          <option :value="6">Outro</option>
        </select>
        <span>
          <button class="reset-btn">Rerdefinir</button
          ><button class="save-btn">Salvar</button>
        </span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  width: 60vw;
  padding: 20vh 0 5vh 0;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 4vh;

  & h1 {
    font-weight: 400;
  }

  & .profile-image {
    display: flex;
    align-items: center;
    gap: 1vw;

    & img {
      width: 100px;
      height: 100px;
      border-radius: 50%;
      border: 1px solid #ffffff;
    }

    & button {
      background-color: #e09b6b;
      color: #1e1e1e;
      border-radius: 30px;
      outline: none;
      border: none;
      height: 5vh;
      min-height: 25px;
      width: 5vw;
      min-width: 60px;
      cursor: pointer;
    }
  }

  & .info-container {
    display: grid;
    grid-gap: 10px;
    grid-template-columns: 1fr 1fr;
  }

  & .info {
    display: flex;
    flex-direction: column;
  }
  & .last-info {
    width: min-content;

    & span {
      display: table;
      margin: 8vh 0 0 auto;

      & button {
        border-radius: 50px;
        height: 6vh;
        min-height: 25px;
        width: auto;
        padding: 0.5vh 2vw;
        outline: none;
        cursor: pointer;
      }
      & .reset-btn {
        background-color: transparent;
        border: 1px solid #e09b6b;
        color: #ffffff;
      }

      & .save-btn {
        background-color: #e09b6b;
        color: #1e1e1e;
        border: none;
        margin-left: 1vw;
      }
    }
  }
  & input,
  select,
  textarea,
  label {
    background-color: #242424;
    border: 1px solid #505050;
    border-radius: 6px;
    outline: none;
    color: #ffffff;
    height: 6vh;
    min-height: 25px;
    width: 22vw;
    min-width: 200px;
    padding: 0.1vh 0.5vw;
  }

  & select {
    height: 6.3vh;
    min-height: 29px;
    width: 23.2vw;
    min-width: 208px;
  }

  & textarea {
    resize: none;
    height: 20vh;
    min-width: 200px;
  }

  & label {
    font-size: 0.8rem;
    display: flex;
    align-items: center;

    & p {
      border: 1px solid #505050;
      border-radius: 4px;
      padding: 0.5vh 0.5vw;
      cursor: pointer;
    }
    & .file-name {
      border: none;
      max-width: 11vw;
      max-height: 1rem;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }

  & input[type="file"] {
    display: none;
  }
}
</style>
