<script setup>
import { ArrowTopRight } from '@/components/icons'
</script>
<template>
  <div class="business-container">
    <div class="text-container">
      <p class="top-text">NEW JOB PARA EMPRESAS</p>
      <h2>Aumente o alcance da sua empresa</h2>
      <div class="line"></div>
      <p class="text">Possui uma empresa na área de agropecuária ou medicina veterinária?</p>
      <router-link class="button-login" to="/login">Cadaste-se</router-link>
    </div>
    <div class="carousel">
      <div class="carousel-card">
        <img class="carousel-img" src="https://i.ibb.co/9mLfT1FW/image.png" alt="" />
        <div class="arrow-button">
          <ArrowTopRight size="30" />
        </div>
        <p>A sua empresa já está no sistema? reivindique-a</p>
      </div>
      <div class="carousel-card">
        <img class="carousel-img" src="https://i.ibb.co/9mLfT1FW/image.png" alt="" />
        <div class="arrow-button">
          <ArrowTopRight size="30" />
        </div>
        <p>Filtragem para a seleção de funcionários</p>
      </div>
      <div class="carousel-card">
        <img class="carousel-img" src="https://i.ibb.co/9mLfT1FW/image.png" alt="" />
        <div class="arrow-button">
          <ArrowTopRight size="30" />
        </div>
        <p>Fácil acesso pelos usuários</p>
      </div>
    </div>
  </div>
</template>
<style scoped>
.business-container {
  display: flex;
  padding: 7% 9% 7%;
  max-width: 1215px;
  align-items: center;
  justify-self: center;
  gap: 110px;
  justify-content: space-between;
}

.text-container {
  display: flex;
  flex-direction: column;
  gap: 0.9vw;
  width: 50%;

  & .top-text {
    color: var(--verde-claro);
    letter-spacing: 2px;
    font-size: 0.8em;
  }

  & .line {
    width: 70px;
    height: 4px;
    background: #0e301c;
    background: linear-gradient(
      90deg,
      rgba(14, 48, 28, 1) 0%,
      rgba(7, 115, 75, 1) 50%,
      rgba(14, 48, 28, 1) 100%
    );
  }

  & h2 {
    font-size: 2.9rem;
    font-weight: 600;
  }

  & .text {
    color: var(--cinza-claro);
    font-size: 1rem;
    margin-top: 1rem;
  }
}

.button-login {
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background: #0e301c;
  background: linear-gradient(
    90deg,
    rgba(14, 48, 28, 1) 0%,
    rgba(7, 115, 75, 1) 50%,
    rgba(14, 48, 28, 1) 100%
  );
  width: 40%;
  padding: 10px;
  font-size: 1.1rem;
  border-radius: 30px;
  color: var(--branco);
  transition: all 0.2s ease-in-out;
  box-shadow: -1px -1px 72px -15px rgba(14, 48, 28, 0.63);
  -webkit-box-shadow: -1px -1px 72px -15px rgba(14, 48, 28, 0.63);
  -moz-box-shadow: -1px -1px 72px -15px rgba(14, 48, 28, 0.63);
}

.button-login:hover {
  transform: translate(0, -3px);
  box-shadow: 1px 1px 66px -5px rgba(7, 115, 75, 0.46);
  -webkit-box-shadow: 1px 1px 66px -5px rgba(7, 115, 75, 0.46);
  -moz-box-shadow: 1px 1px 66px -5px rgba(7, 115, 75, 0.46);
  background: #0e301c;
  background: linear-gradient(
    90deg,
    rgba(14, 48, 28, 1) 0%,
    rgb(12, 136, 90) 50%,
    rgba(14, 48, 28, 1) 100%
  );
}

.carousel {
  display: flex;
  overflow-x: scroll;
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;
  gap: 1rem;
  padding: 1rem;
  width: 50%;

  & .carousel-card {
    flex: 0 0 auto;
    position: relative;
    min-height: 210px;
    height: 14vw;
    width: 14vw;
    min-width: 190px;
    padding: 0.8rem;
    border-radius: 15px;

    & .carousel-img {
      height: 80%;
      width: 100%;
      border-radius: 14px;
      object-fit: cover;
    }

    .arrow-button {
      display: flex;
      position: absolute;
      bottom: 25%;
      left: 76%;
      align-items: center;
      justify-content: center;
      background-color: var(--laranja);
      width: 2.5vw;
      height: 2.5vw;
      border-radius: 50%;

      & span {
        display: flex;
        align-items: center;
      }
    }

    & p {
      font-size: 1.1em;
      font-weight: 500;
    }
  }

  & .carousel-card:hover .arrow-button {
    display: flex;
  }

  & .carousel-card:hover {
    background-color: var(--preto);
  }
}

::-webkit-scrollbar {
  border-radius: 10px;
height: 8px;
}
::-webkit-scrollbar-track {
  background: transparent;
}
::-webkit-scrollbar-thumb {
  background-color: var(--laranja);
  border-radius: 10px;
  height: 8px;
}
</style>
