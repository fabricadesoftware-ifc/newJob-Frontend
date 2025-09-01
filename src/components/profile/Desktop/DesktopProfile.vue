<script setup></script>

<template>
  <div class="container">
    <div class="profile-image">
      <img
        src=""
        alt=""
      />
      <button>Alterar</button>
    </div>
    <div class="info-container">
      <div class="info">
        <p>Nome</p>
        <input type="text" />
      </div>
      <div class="info">
        <p>Sobrenome</p>
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
        <p>Nível de Escolaridade</p>
        <select name="select">
          <option :value="1">Ensino Fundamental</option>
          <option :value="2">Ensino Médio</option>
          <option :value="3">Ensino Superior</option>
          <option :value="4">Pós-Graduação</option>
          <option :value="5">Mestrado</option>
          <option :value="6">Doutorado</option>
        </select>
      </div>
      <div class="info">
        <p>Comorbidade</p>
        <input type="text" />
      </div>
      <div class="info">
        <p>Disponibilidade para viajar</p>
        <input type="text" />
      </div>
      <div class="info">
        <p>Sobre</p>
        <textarea />
      </div>
      <div class="last-info">
        <p>Linkedin</p>
        <input type="text" />
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
  width: 100vw;
  align-items: center;
  align-content: center;
  padding: 10vh 0;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 4vh;

  & h1{
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
      border: 1px solid var(--branco);
    }

    & button {
      background-color: var(--laranja);
      color: var(--preto-escuro);
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
        border: 1px solid var(--laranja);
        color: var(--branco);
      }

      & .save-btn {
        background-color: var(--laranja);
        color: var(--preto-escuro);
        border: none;
        margin-left: 1vw;
      }
    }
  }
  & input,
  select,
  textarea {
    background-color: var(--preto-escuro);
    border: 1px solid var(--cinza-escuro);
    border-radius: 6px;
    outline: none;
    color: var(--branco);
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
}
</style>
