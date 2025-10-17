<template>
  <main>
    <div class="hero">
      <div class="title-section">
        <h1>VAGAS AGRÍCOLAS PARA DIVERSAS HABILIDADES</h1>
        <!-- <h1>Vagas agrícolas para diversas habilidades</h1> -->
        <p>
          New Job é um software inovador projetado para criar uma ponte entre profissionais
          talentosos e empresas agrícolas em busca de mão de obra qualificada.
        </p>
      </div>
      <div class="image-container">
        <span class="main-image"> </span>
        <div class="image-btn">
          <i class="mdi mdi-arrow-top-right"></i>
        </div>
      </div>
      <button class="show-jobs-bt">Ver vagas</button>
    </div>
  </main>
</template>
<style scoped>
main {
  padding: 0 30px;
}

.hero {
  display: flex;
  flex-direction: column;
  background: linear-gradient(
    28deg,
    var(--verde-escuro) 15%,
    var(--verde),
    var(--verde-escuro) 85%
  );
  border-radius: 20px;
  padding: 30px;
  gap: 30px;
}

.title-section {
  display: flex;
  flex-direction: column;
  gap: 15px;

  & h1 {
    font-weight: 500;
    font-size: 3rem;
    line-height: 120%;
  }
}

.image-container {
  position: relative;
  top: 20%;
  aspect-ratio: 30/17;
  margin-bottom: 2vw;
  display: flex;
  align-items: center;

  & .main-image {
    position: absolute;
    width: 100%;
    height: 40vw;
    border-radius: 40em;
    rotate: 6deg;
    box-shadow:
      0px -60px 70px 10px var(--preto-escuro) inset,
      -10px 10px 0px #000000a1,
      15px 10px 0px #000000a1;
    background: url('https://i.ibb.co/RgKjgKf/image.png');
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
    width: 13vw;
    max-width: 120px;
    aspect-ratio: 1/1;
    border-radius: 50%;

    & .mdi {
      font-size: 3em;
    }
  }
}

.show-jobs-bt {
  background: #b9672d;
  background: linear-gradient(
    90deg,
    rgba(185, 103, 45, 1) 0%,
    rgba(224, 155, 107, 1) 50%,
    rgba(185, 103, 45, 1) 100%
  );
  border: none;
  border-radius: 30px;
  padding: 10px;
  font-weight: 600;
  font-size: 1.3rem;
}

@media (max-width: 768px) and (min-width: 580px) {
  .image-container {
    width: 100%;
    height: 50vw;
  }

  .show-jobs-bt {
    padding: 12px;
    font-size: 1.5rem;
  }

  .title-section {
    display: flex;
    flex-direction: column;
    gap: 15px;

    & h1 {
      font-weight: 500;
      font-size: 3.7rem;
      line-height: 120%;
    }

    & p {
      font-size: 1.2rem;
    }
  }

  .image-btn {
    right: 5% !important;
    top: 5% !important;
  }
}

@media (min-width: 580px) {
  .image-btn {
    & .mdi {
      font-size: 2em !important;
    }
  }
}
</style>
