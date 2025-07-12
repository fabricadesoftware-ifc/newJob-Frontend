<script setup>
import { ArrowTopRight } from '../icons'
</script>

<template>
  <div class="container">
    <img class="bg-img" src="https://i.ibb.co/6gZqqxG/line-bg.png" alt="" />
    <div class="image-container">
      <span class="main-image"> </span>
      <div class="image-btn">
        <ArrowTopRight size="100" />
      </div>
    </div>
    <div class="content-container">
      <h1>VAGAS AGRÍCOLAS PARA DIVERAS HABILIDADES.</h1>
      <p>
        New Job Agri Business é um software inovador projetado para revolucionar o setor de
        recrutamento agrícola. Nosso objetivo é criar uma ponte entre profissionais talentosos e
        empresas agrícolas em busca de mão de obra qualificada.
      </p>
      <button class="button-show-more">Ver vagas</button>
    </div>
  </div>
</template>

<style scoped>
.container {
  border-radius: 40px;
  min-height: 100%;
  background: linear-gradient(28deg, #0e301c 15%, #07734b, #0e301c 85%);
  
}

.bg-img {
  position: absolute;
  right: 3%;
  filter: brightness(3) opacity(30%);
  height: 90%;
}


.image-container {
  position: absolute;
  right: 9%;
  bottom: 14%;
  width: 49%;
  height: 56%;

  & .main-image {
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 40em;
    rotate: 6deg;
    box-shadow:
      0px -60px 70px 10px var(--preto-escuro) inset,
      -10px 10px 0px #000000a1,
      15px 10px 0px #000000a1;
    background: url('https://i.ibb.co/RgKjgKf/image.png');
    opacity: 80%;
    background-size: cover;
  }

  & .image-btn {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    right: 5%;
    top: -5%;
    background: #b9672d;
    background: linear-gradient(0deg, rgba(185, 103, 45, 1) 0%, rgba(224, 155, 107, 1) 50%);
    width: 9rem;
    height: 9rem;
    border-radius: 50%;

    & span {
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
}

.content-container {
  display: flex;
  flex-direction: column;
  gap: 6vh;
  position: relative;
  padding: 7% 0 0 8%;
  width: 65%;

  & h1 {
    color: var(--branco);
    font-size: clamp(2rem, 4.8vw, 6rem);
    font-weight: 600;
    line-height: 1.2;
  }

  & p {
    max-width: 45%;
    color: var(--branco);
    font-size: 1.1rem;
    word-spacing: 2px;
  }

  & .button-show-more {
  background: #b9672d;
  background: linear-gradient(
    90deg,
    rgba(185, 103, 45, 1) 0%,
    rgba(224, 155, 107, 1) 50%,
    rgba(185, 103, 45, 1) 100%
  );
  border: none;
  height: 3vw;
  width: 12vw;
  border-radius: 30px;
  font-weight: 600;
  font-size: 1.1em;
}
}
</style>
