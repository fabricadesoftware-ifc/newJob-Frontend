<script setup>
import { ref } from 'vue'
import { Magnify, WeatherSunny, WeatherNight } from '@/components/icons'

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
        <Magnify size="20" />
        <input type="text" placeholder="Pesquisar" />
      </div>
      <div class="teme-icon" @click="temeColor = !temeColor">
        <WeatherSunny v-if="temeColor" />
        <WeatherNight v-if="!temeColor" />
      </div>
      <img class="user-image" src="https://i.ibb.co/HfSFj38g/image.png" alt="" />
    </div>
  </div>
</template>

<style scoped>
.container-wrapper {
  display: flex;
  justify-content: space-between;
  width: 1215px;
  top: 0px;
}

.container {
  display: flex;
  align-items: center;
  justify-content: center;

  & a:first-of-type {
    display: flex;
    background-color: transparent;
  }

  & span {
    display: flex;
    align-items: center;
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
.teme-icon {
  border-radius: 7px;
  color: var(--branco-claro);
  font-weight: 500;
  font-size: 1rem;
  cursor: pointer;
  padding: 0.3vh 1vw;
}

a:hover,
.teme-icon:hover {
  background-color: var(--preto-claro);
}

.teme-icon {
  padding: 0.3vh;
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

span,
input::placeholder {
  color: var(--branco-escuro);
}

.user-image {
  width: 30px;
}
</style>
