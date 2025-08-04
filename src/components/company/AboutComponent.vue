<script setup>
import { useCompaniesStore } from "@/stores";

const companyStore = useCompaniesStore().currentCompany;
</script>

<template>
  <div class="about-container">
    <img
      :src="
        companyStore.banner.file
          ? companyStore.banner.file
          : 'https://revistacapitaleconomico.com.br/wp-content/uploads/2023/05/agroalimentar-1-1.jpg'
      "
      alt=""
      class="banner-img"
    />
    <img
      class="logo"
      :src="
        companyStore.logo.file
          ? companyStore.logo.file
          : 'https://i.ibb.co/GQwmT4tQ/Ellipse-180.png'
      "
      alt=""
    />
    <div class="text-container">
      <span class="info-text">
        <p>{{ companyStore.name }}</p>
        <p>{{ companyStore.city.name }}, {{ companyStore.state.name }}</p>
      </span>
      <button class="orange-btn">Contatar-se</button>
    </div>
    <span class="about-text">
      <p>Sobre</p>
      <p>{{ companyStore.about }}</p>
    </span>
  </div>
</template>

<style scoped>
.about-text p:first-child {
  margin: 4vh 0 1vh 0;
  font-size: 1.4rem;
  text-transform: capitalize;
  font-weight: 600;
}

/* .about-text p:last-of-type {
  } */

.banner-img {
  position: absolute;
  width: 100%;
  min-height: 100px;
  aspect-ratio: 4 / 1;
  left: 0;
  top: 0;
  border-radius: 10px 10px 0 0;
  object-fit: cover;
}

.logo {
  position: inherit;
  width: 20%;
  aspect-ratio: 1 / 1;
  border-radius: 50%;
  border: 4px solid #131313;
  margin: 10% 0 0 1vw;
  z-index: 2;
  object-fit: cover;
}

.info-text {
  z-index: 2;

  & p:first-child {
    font-size: 1.7rem;
    text-transform: capitalize;
    font-weight: 600;
  }

  & p:last-of-type {
    color: #a0a0a0;
  }
}

.text-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.orange-btn {
  background-color: #e09b6b;
  border: none;
  padding: 1vh 1vw;
  border-radius: 8px;
  font-size: 0.9rem;
  font-weight: 600;
}

.about-container {
  position: relative;
  border: 1px solid #505050;
  width: 55vw;
  min-width: 400px;
  padding: 2vh 2vw;
  border-radius: 10px;
  background-color: #131313;
}
</style>
