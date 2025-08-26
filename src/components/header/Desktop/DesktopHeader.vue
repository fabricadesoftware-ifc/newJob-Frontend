<script setup>
import { ref } from "vue";
const temeColor = ref(true);
</script>

<template>
  <div class="container-wrapper">
    <div class="container">
      <router-link to="/">
        <img src="https://i.ibb.co/Z1R6JQHf/logo.png" alt="" class="logo" />
      </router-link>
      <div class="links-container">
        <div class="links">
          <router-link to="/">Início</router-link>
          <router-link to="/jobs">Vagas</router-link>
          <router-link to="/profile">Perfil</router-link>
        </div>
      </div>
    </div>
    <div class="container" style="gap: 1vw">
      <div class="input-container">
        <i class="mdi mdi-magnify"></i>
        <input type="text" placeholder="Pesquisar" />
      </div>
      <div class="teme-icon" @click="temeColor = !temeColor">
        <i class="mdi mdi-weather-sunny" v-if="temeColor"></i>
        <i class="mdi mdi-weather-night" v-if="!temeColor"></i>
      </div>
      <img class="user-image" src="https://i.ibb.co/HfSFj38g/image.png" alt="" />
    </div>
  </div>
</template>

<style scoped>
.container-wrapper {
  display: flex;
  align-self: center;
  justify-self: center;
  justify-content: space-between;
  width: 1215px;
  position: absolute;
  z-index: 1;
  top: 0px;
  padding: 0.5vw;
}

.container {
  display: flex;
  align-items: center;
  justify-content: center;

  & a:first-of-type {
    display: flex;
    background-color: transparent;
  }
}

.logo {
  width: 8vw;
  object-fit: contain;
  min-width: 100px;
}

.links-container {
  display: flex;
  justify-content: center;
  align-items: center;

  & .links {
    display: flex;
    align-items: center;
    width: fit-content;
    min-height: 30px;
    color: var(--branco-escuro);

    & .router-link-active {
      color: var(--branco);
    }

    & a:hover {
      background-color: var(--preto-claro);
    }
  }
}

a,
.teme-icon{
  border-radius: 7px;
  color: var(--branco-claro);
  font-weight: 500;
  font-size: 16px;
  cursor: pointer;
  padding: 0.3vh 1vw;
  display: flex;
  align-items: center;
}

a:hover,
.teme-icon:hover {
  background-color: var(--preto-claro);
}

.teme-icon {
  padding: 3px;
}

.input-container {
  display: flex;
  align-items: center;
  border: hsl(0, 0%, 63%, 20%) 1px solid;
  border-radius: 7px;
  padding: 5px 8px;
  gap: 5px;

  & input {
    background-color: transparent;
    border: none;
    font-size: 14px;
  }

  & input:focus {
    outline: none;
  }
}

input {
  color: var(--branco);
}

.mdi,
input::placeholder {
  color: var(--branco-escuro);
}

.user-image {
  width: 30px;
}
</style>
