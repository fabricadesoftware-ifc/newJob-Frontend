<script setup>
import { onMounted, reactive, ref } from 'vue';
import { Plus, ArrowRight } from '../components/icons'
import { HeaderComponent, FooterComponent, CardJobs, ModalAddJob } from '@/components/index'

const showModal = ref(false);
</script>
<template>
  <HeaderComponent />
  <main>
    <div class="container">
      <div class="title">
        <h1>Vagas</h1>
        <button class="bt-add-vaga" @click="showModal = !showModal">
          <Plus class="icon-bt" />
          <p class="text-bt">Criar vaga</p>
        </button>
      </div>
      <div class="cards">
        <!-- <CardJobs />
        <CardJobs />
        <CardJobs />
        <CardJobs />
        <CardJobs />
        <CardJobs />
        <CardJobs />
        <CardJobs /> -->
      </div>
      <div class="empty">
        <h2>Você ainda não publicou nenhuma vaga...</h2>
        <img class="vaquinha-img" src="https://i.ibb.co/HrdxBSF/vaca.png" alt="" />
        <button class="bt-vaga" @click="showModal = !showModal">Cadastrar vaga</button>
      </div>
    </div>
    <ModalAddJob v-if="showModal" @close="showModal = !showModal"/>
  </main>
  <FooterComponent />
</template>
<style scoped>
main {
  padding-top: 5vw;
  width: 100%;
  min-height: 100vh;
}

.container {
  padding: 4vw;
}

.title {
  display: flex;
  gap: 1vw;
  margin: 2vw;
}

h1 {
  font-weight: 400;
}

.bt-add-vaga {
  background-color: #e09b6b;
  width: 2.5vw;
  height: 2.5vw;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50px;
  border: none;
  transition: width 0.3s;

  & .text-bt {
    display: none;
    color: #1e1e1e;
    font-weight: bold;
    font-size: 1.2em;
  }

  span {
    display: flex;
    align-items: center;
    justify-content: center;
  }
}

.bt-add-vaga:hover {
  width: 7vw;
  border-radius: 30px;
  transform: scale(1);
}

.bt-add-vaga:hover > .text-bt {
  display: block;
}

.bt-add-vaga:hover > .icon-bt {
  display: none;
}

.cards {
  display: grid;
  justify-items: center;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  margin-top: 2vw;
}

.card {
  background-color: #1d4734;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 18vw;
  height: 19vw;
  border-radius: 30px;

  & img {
    width: 5vw;
    height: 5vw;
    border-radius: 50%;
    border: 6px solid white;
    bottom: 14%;
    position: relative;
    z-index: 4;
  }

  & .card-title {
    font-size: 1.2em;
    font-weight: 500;
  }

  & .place {
    font-weight: 200;
  }

  & button {
    background-color: #e09b6b;
    border: none;
    padding: 0.5vw;
    width: 70%;
    font-weight: 600;
    display: flex;
    justify-content: space-between;
    border-radius: 30px;

    & p {
      color: black;
      font-size: 1.3em;
    }
  }
}

/* vaquinha */
.empty {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 3vw;
}

.bt-vaga {
  background-color: #e09b6b;
  border: none;
  width: 11vw;
  border-radius: 30px;
  padding: 0.5vw;
  font-weight: bold;
  font-size: 1em;
}

.vaquinha-img {
  width: 16vw;
}

h2 {
  font-weight: 600;
  font-size: 1.1vw;
}
</style>
