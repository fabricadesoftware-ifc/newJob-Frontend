<script setup>
import { Heart } from '../icons'
</script>
<template>
  <div class="container">
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
        <tr>
          <td class="user-title"><img src="https://i.ibb.co/WWRsZdjx/image-1.png" alt="" /></td>
          <td>Natasha Russo dos Santos</td>
          <td>natasha@gmail.com</td>
          <td>Currículo</td>
          <td><div class="requirements-flag">Todos</div></td>
          <td><Heart class="heart-icon" /></td>
        </tr>
        <tr>
          <td class="user-title"><img src="https://i.ibb.co/WWRsZdjx/image-1.png" alt="" /></td>
          <td>Natasha Russo dos Santos</td>
          <td>natasha@gmail.com</td>
          <td>Currículo</td>
          <td><div class="requirements-flag">Todos</div></td>
          <td><Heart class="heart-icon" /></td>
        </tr>
        <tr>
          <td class="user-title"><img src="https://i.ibb.co/WWRsZdjx/image-1.png" alt="" /></td>
          <td>Natasha Russo dos Santos</td>
          <td>natasha@gmail.com</td>
          <td>Currículo</td>
          <td><div class="requirements-flag">Todos</div></td>
          <td><Heart class="heart-icon" /></td>
        </tr>
      </tbody>
    </table>
    <div class="button-container">
      <button class="button-secondary">Descartar</button>
      <button class="button-default">Aplicar</button>
    </div>
  </div>
</template>
<style scoped>
.container {
  padding: 8em;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

table {
  border-collapse: collapse;
  color: #a0a0a0;
  width: 60%;
}

th,
td {
  color: #a0a0a0;
  text-align: left;
  padding: 0 1vw;
  font-size: 15px;
}

tbody tr {
  height: 70px !important;
  border-radius: 20px !important;

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
  height: 30px;
  width: 100px;
}

.heart-icon {
  color: #e6e8ee;
}

/* botões de navegação container */

.button-container {
  display: flex;
  justify-content: space-between;
  width: 40%;

  & .button-secondary,
  .button-default {
    width: 90px;
    padding: 7px;
    border-radius: 5px;
    border: none;
    cursor: pointer;
  }

  & .button-secondary {
    background-color: transparent;
    border: 1px solid #e09b6b;
    color: #e09b6b;
  }

  & .button-default {
    background-color: #e09b6b;
  }
}
</style>
