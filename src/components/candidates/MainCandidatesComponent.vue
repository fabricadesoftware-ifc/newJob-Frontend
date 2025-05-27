<script setup>
import { Heart } from '../icons'
</script>
<template>
  <div class="container">
    <table>
      <thead>
        <tr>
          <th>Nome</th>
          <th>E-mail</th>
          <th></th>
          <th>Requisitos</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class="user-title">
            <img src="https://i.ibb.co/WWRsZdjx/image-1.png" alt="" /> Natasha Russo dos Santos
          </td>
          <td>natasha@gmail.com</td>
          <td>Currículo</td>
          <td><div class="requirements-flag">Todos</div></td>
          <td><Heart class="heart-icon" /></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<style scoped>
.container {
  padding: 8em;
}

table {
  border-collapse: collapse;
  color: #a0a0a0;
  width: 80%;
}

th,
td {
  color: #a0a0a0;
  text-align: center;
}

tbody tr {
  height: 70px !important;
  background-color: red;
}

th {
  border-bottom: 1px solid #505050;
  text-align: left;
  height: 35px;
  font-weight: 400;
}

.heart-icon {
  color: #e6e8ee;
}

tbody tr:first-child {
  height: 60px;
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

.user-title {
  display: flex;
  align-items: center;
  gap: 10px;

  & img {
    width: 45px;
    border-radius: 30px;
  }
}
</style>
