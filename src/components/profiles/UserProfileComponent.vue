<script setup>
import { Pencil } from '../icons'
</script>
<template>
  <main>
    <div class="primary-info-container">
      <div class="banner">
        <img
          src="https://img.freepik.com/fotos-premium/uma-flor-roxa-com-um-centro-amarelo-e-mostrada_415641-7665.jpg"
          alt=""
        />
        <div class="bt-edit">
          <Pencil />
        </div>
      </div>
      <div class="info">
        <div class="name-container">
          <h1>Natasha Russo dos Santos</h1>
          <p>Araquari, Santa Catarina</p>
        </div>
        <div class="about-container">
          <h2>Sobre</h2>
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
            laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis. Sed ut
            perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
            laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis
          </p>
        </div>
      </div>
    </div>
    <div class="jobs-container">
      <div class="title">Para você</div>
    </div>
  </main>
</template>
<style scoped>
main {
  padding-top: 5vw;
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  gap: 1.3vw;
}

.primary-info-container {
  background-color: #242424;
  border: 1px solid #505050;
  border-radius: 20px;
  width: 45%;

  & .info {
    padding: 1.2vw;
  }

  & h1 {
    font-size: 24px;
    font-weight: 600;
  }

  & h2 {
    font-size: 20px;
  }

  & .bt-edit {
    background-color: #242424;

    & span {
      color: white;
    }
  }

  & .banner {
    & img {
      width: 100%;
      height: 25vh;
      border-radius: 20px 20px 0 0;
      object-fit: cover;
    }

    & .bt-edit {

    }
  }
}

.jobs-container {
  & .title {
    background-color: #242424;
    border: 1px solid #505050;
    color: #e6e8ee;
    border-radius: 12px;
    padding: 0.7vw 3.5vw;
  }
}
</style>
