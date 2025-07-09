<template>
  <div class="gradient">
    <div class="about-container">
      <img class="about-img" src="https://i.ibb.co/9mLfT1FW/image.png" alt="" />
      <div class="text-container">
        <p class="top-text">SOBRE NÓS</p>
        <h2>O que é a New Job?</h2>
        <div class="line"></div>
        <p class="text">
          New Job Agro business é mais do que apenas um software de busca de empregos - é uma
          plataforma que visa fortalecer o setor agrícola, conectando empresas e profissionais de
          maneira eficiente e eficaz. Junte-se a nós hoje e descubra como podemos transformar sua
          jornada de busca de emprego ou recrutamento.
        </p>
      </div>
    </div>
  </div>
</template>
<style scoped>
.gradient {
  background: #131313;
  background: linear-gradient(
    180deg,
    rgba(19, 19, 19, 1) 0%,
    rgba(36, 36, 36, 1) 50%,
    rgba(19, 19, 19, 1) 100%
  );
}

.about-container {
  display: flex;
  padding: 10% 9% 5%;
  width: 1215px;
  align-items: center;
  justify-self: center;
  justify-content: space-between;
}

.about-img {
  width: 45%;
  height: 26vw;
  border-radius: 20px;
  object-fit: cover;
}

.text-container {
  display: flex;
  flex-direction: column;
  gap: 0.9vw;
  width: 45%;

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
</style>
