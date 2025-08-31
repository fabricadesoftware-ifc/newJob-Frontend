<template>
  <div class="container">
    <div class="body-container">
      <div class="text-container">
        <p class="top-text">UM SANTO NA SUA CARREIRA</p>
        <h2>Conectando talentos do setor agrícola</h2>
        <div class="line"></div>
        <p class="text">
          A NewJob permite que os indivíduos com diversas habilidades e experiências tenham acesso a
          oportunidades no setor agrícola. Seja você um engenheiro agrônomo, um técnico em irrigação
          ou alguém com habilidades manuais para o trabalho no campo, a NewJob tem algo para você.
        </p>
      </div>
      <div class="numbers-conteiner">
        <span class="info">
          <span class="number">105<span class="icon">+</span></span>
          <p class="info-text">Empresas</p>
        </span>
        <span class="info">
          <span class="number">7000<span class="icon">+</span></span>
          <p class="info-text">Vagas cadastradas</p>
        </span>
        <span class="info">
          <span class="number">5000<span class="icon">+</span></span>
          <p class="info-text">Candidaturas</p>
        </span>
      </div>
    </div>
    <img src="https://i.ibb.co/9mLfT1FW/image.png" alt="" />
  </div>
</template>

<style scoped>
.container {
  display: flex;
  justify-content: space-between;
  padding: 5% 9% 5%;
  max-width: 1215px;
  align-self: center;
  justify-self: center;
  align-items: center;

  & .body-container {
    display: flex;
    flex-direction: column;
    gap: 2vw;
    width: 55%;
  }

  & img {
    width: 35%;
    height: 24vw;
    max-height: 100%;
    border-radius: 20px;
    object-fit: cover;
  }
}

.text-container {
  display: flex;
  flex-direction: column;
  gap: 0.9vw;

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

.numbers-conteiner {
  display: flex;
  justify-content: space-between;

  & .info {
    display: flex;
    flex-direction: column;
    align-items: normal;
    gap: 0;

    & .info-text {
      color: var(--branco-escuro);
      font-size: 1rem;
    }

    & .number {
      display: flex;
      font-weight: 600;
      font-size: 2.7rem;
      color: var(--branco);

      & .icon {
        color: var(--laranja);
      }
    }
  }
}
</style>
