<script setup>
defineProps(['image', 'company', 'title', 'local', 'id'])
import { ArrowRight } from '../../icons/index.js'
</script>
<template>
  <div class="container-card">
    <div class="logo-container">
      <img
        :src="image ? image.file : `https://i.ibb.co/9GMPt74/image-removebg-preview.png`"
        alt=""
        class="logo"
      />
    </div>
    <!-- <div class="box-info">
      <h3 class="title-card-info">{{ company }}</h3>
      <h3 class="pt">{{ title }}</h3>
      <p>{{ local.state.name }}, {{ local.city }}</p>
      <div class="pt-4">
        <routerLink :to="'/about/' + id" class="btn" @click="getJob(id)"
          >Saiba mais</routerLink
        >
      </div>
    </div> -->
    <div class="box-info">
      <p class="title-card">BioAgric</p>
      <span>
        <p class="title-card">Analista de Infraestrutura</p>
        <p class="place">Curitiba, Paraná</p>
      </span>
      <routerLink :to="'/about/' + id" class="btn" @click="getJob(id)">
        <p>Saiba mais</p>
        <ArrowRight size="30"/>
      </routerLink>
    </div>
  </div>
</template>

<style scoped>
.container-card {
  background: radial-gradient(circle, rgba(42, 105, 76, 1) 15%, rgba(30, 72, 53, 1) 95%);
  border-radius: 3em;
  width: 19vw;
  height: 40vh;
  position: relative;
  margin-top: 6vw;
}

.logo-container {
  position: absolute;
  bottom: 75%;
  left: 50%;
  transform: translateX(-50%);

  & .logo {
    width: 8vw;
    height: 8vw;
    border-radius: 50%;
    object-fit: cover;
  }
}

.btn {
  border: none;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #e09b6b;
  padding: 0.6em;
  width: 70%;
  font-weight: bold;
  cursor: pointer;
  border-radius: 30px;
  font-size: 1.2em;
  color: #000000;

  & p {
    color: #1E1E1E;
    font-size: 1em;
  }

  & span {
    display: flex;
    align-items: center;
    justify-content: center;
  }
}

.box-info {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding-top: 9em;
  gap: 1vw;
  position: relative;
  bottom: 10%;
  

  & .title-card {
    font-size: 1.5em;
    font-weight: 500;
  }

  & .place {
    font-weight: 100;
  }

  & span {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
}

p {
  font-size: 1.2em;
}
</style>
