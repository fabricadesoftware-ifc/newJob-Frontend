<script setup>
import { Heart } from '../icons'
</script>
<template>
  <div class="container">
    <h1>CANDIDATOS</h1>
    <div class="center">
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Nome</th>
            <th>E-mail</th>
            <th></th>
            <th>Requisitos</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="i in 10">
            <td class="user-title"><img src="https://i.ibb.co/WWRsZdjx/image-1.png" alt="" /></td>
            <td>Natasha Russo dos Santos</td>
            <td>natasha@gmail.com</td>
            <td>Currículo</td>
            <td><div class="requirements-flag">Todos</div></td>
            <td><Heart class="heart-icon" size="20" /></td>
          </tr>
        </tbody>
      </table>
      <div class="button-container">
        <button class="button-secondary">Voltar</button>
        <button class="button-default">Aplicar</button>
      </div>
    </div>
    <div class="card">
      <img
        src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        alt=""
      />
      <div>
        <p class="card-title">Natasha Russo dos Santos</p>
        <p class="card-curse">Bacharelado em Sistemas de Informação</p>
      </div>
      <button class="button-default" style="width: 100%; border-radius: 10px;">Ver perfil</button>
    </div>
  </div>
</template>
<style scoped>
.container {
  padding: 8em 0;
  display: grid;
  grid-template-areas: 
  'title title'
  'a card';
  justify-content: center;
  gap: 2vw;
}

.center {
  grid-area: a;
  display: flex;
  flex-direction: column;
  gap: 40px;
}

h1 {
  grid-area: title;
  font-size: 3em;
  font-weight: 600;
}

table {
  border-collapse: collapse;
  color: #a0a0a0;
  width: 55vw;
}

th,
td {
  color: #a0a0a0;
  text-align: left;
  padding: 0 1vw;
  font-size: 15px;
}

tbody tr {
  height: 55px !important;
  border-radius: 20px !important;

  & span {
    display: flex;
    align-items: center;
  }

  td:first-child {
    border-radius: 10px 0 0 10px;
  }

  td:last-child {
    border-radius: 0 10px 10px 0;
  }
}

tbody tr:hover {
  background-color: #282828;

  & td {
    color: #e6e8ee;
  }
}

tbody tr:first-child {
  height: 60px;
}

th {
  border-bottom: 1px solid #505050;
  height: 35px;
  font-weight: 400;
}

td img {
  width: 35px;
  border-radius: 30px;
}

.requirements-flag {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #5a9166;
  color: #dfffe9;
  border-radius: 18px;
  height: 25px;
  width: 80px;
}

.heart-icon {
  color: #e6e8ee;
}

/* botões de navegação container */

.button-container {
  display: flex;
  gap: 15px;
  align-self: end;
}

.button-secondary,
.button-default {
  width: 90px;
  padding: 7px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
}

.button-secondary {
  background-color: transparent;
  border: 1px solid #e09b6b;
  color: #e09b6b;
}

.button-default {
  background-color: #e09b6b;
}

/* card */
.card {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 7px;
  width: 200px;
  grid-area: card;

  & img {
    border-radius: 15px;
    width: 200px;
    height: 180px;
    object-fit: cover;
  }

  & .card-title {
    font-size: 14px;
    font-weight: 500;
  }

  & .card-curse {
    font-size: 12px;
    font-weight: 300;
    color: #a0a0a0;
  }
}
</style>
