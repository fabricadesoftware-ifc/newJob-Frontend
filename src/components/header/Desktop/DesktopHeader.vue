<script setup>
import { ref } from 'vue'
import { HoverBox } from '@/components'

const temeColor = ref(true)
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
        <HoverBox texto="Tema de cores" />
      </div>
      <div class="user-image">
        <img src="https://i.ibb.co/HfSFj38g/image.png" alt="" />
        <HoverBox texto="Sair" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.container-wrapper {
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 5px;
  justify-self: center;
  max-width: 1215px;
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

.teme-icon {
  padding: 0.3vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  position: relative;
}

.teme-icon:hover .hoverbox {
  opacity: 1;
}

a {
  padding: 0.3vh 1vw;
}

a,
.teme-icon{
  border-radius: 7px;
  color: var(--branco-escuro);
  font-weight: 500;
  cursor: pointer;
}

a:hover,
.teme-icon:hover {
  background-color: var(--preto-claro);
}

.input-container {
  display: flex;
  align-items: center;
  border: hsl(0, 0%, 63%, 20%) 1px solid;
  border-radius: 10px;
  padding: 1px 10px;
  gap: 7px;
  width: 18rem;

  & input {
    background-color: transparent;
    border: none;
    font-size: 0.9rem;
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
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  cursor: pointer;

  img {
    width: 30px;
  }
}

.user-image:hover .hoverbox {
  /* PERGUNTAR SE É CORRETO */
  opacity: 1;
}
</style>
