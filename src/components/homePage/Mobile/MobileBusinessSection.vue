<template>
  <div class="business-container">
    <div class="text-container">
      <p class="top-text">NEW JOB PARA EMPRESAS</p>
      <h2>Aumente o alcance da sua empresa</h2>
      <div class="line"></div>
      <p class="text">Possui uma empresa na área de agropecuária ou medicina veterinária?</p>
      <router-link class="button-login" to="/login">Cadaste-se</router-link>
    </div>
    <div class="overflow-box">
      <div class="carousel">
        <div class="carousel-card">
          <div class="carousel-img-container" alt="">
            <div class="arrow-button">
              <i class="mdi mdi-arrow-top-right"></i>
            </div>
          </div>
          <p>A sua empresa já está no sistema? reivindique-a</p>
        </div>
        <div class="carousel-card">
          <div class="carousel-img-container" alt="">
            <div class="arrow-button">
              <i class="mdi mdi-arrow-top-right"></i>
            </div>
          </div>
          <p>Filtragem para a seleção de funcionários</p>
        </div>
        <div class="carousel-card">
          <div class="carousel-img-container" alt="">
            <div class="arrow-button">
              <i class="mdi mdi-arrow-top-right"></i>
            </div>
          </div>
          <p>Fácil acesso pelos usuários</p>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.overflow-box {
  max-width: 80%;
  width: 80vw;
  overflow: visible;
}

.business-container {
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding: 60px 30px;
  align-self: center;
  justify-self: center;
  align-items: left;
}

.text-container {
  display: flex;
  flex-direction: column;
  gap: 2vw;

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
  width: 32vw;
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
  -webkit-overflow-scrolling: touch;
  gap: 1rem;
  padding: 1rem 0;
  width: 86vw;

  & .carousel-card {
    flex: 0 0 auto;
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 14vw;
    min-width: 180px;
    aspect-ratio: 1/1;
    padding: 0.8rem;
    border-radius: 15px;

    & .carousel-img-container {
      position: relative;
      width: 100%;
      height: 20vh;
      min-height: 140px;
      max-height: 14vh;
      border-radius: 14px;
      background-size: cover;
      background-repeat: no-repeat;
      background-image: url(https://i.ibb.co/9mLfT1FW/image.png);
    }

    .arrow-button {
      display: none;
      position: absolute;
      bottom: 10px;
      right: 10px;
      align-items: center;
      justify-content: center;
      background-color: var(--laranja);
      width: 3em;
      height: 3em;
      border-radius: 50%;

      & .mdi {
        font-size: 1.5rem;
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

@media (max-width: 768px) and (min-width: 562px) {
  .carousel-card {
    width: 32vw !important;

    & .carousel-img-container {
      height: 18vh !important;
      max-height: 40vh !important;
    }
  }
}
</style>
