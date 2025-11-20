<script setup>
defineProps(['image', 'company', 'title', 'local', 'id'])
</script>
<template>
  <div class="container-card">
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
    <div class="top">
      <div class="company">
        <img src="https://i.ibb.co/fdxgSVGQ/Ellipse-7-1.png" alt="" />
        <p>Gribusiness</p>
      </div>
      <div class="type-contract">Estágio</div>
    </div>
    <h3>Analista de Infraestrutura</h3>
    <div class="skills-container">
      <div class="skills">Proatividade</div>
      <div class="skills">PHP</div>
      <div class="skills">Proatividade</div>
    </div>
    <div class="bottom">
      <div>
        <p class="salary">R$ 3000</p>
        <p>Araquari, SC - Brasil</p>
      </div>
      <button class="button-bt">Detalhes</button>
    </div>
  </div>
</template>
<style scoped>
.container-card {
  background-color: #1a1b1d;
  border: 1px solid var(--cinza-escuro);
  padding: 20px;
  border-radius: 12px;
  aspect-ratio: 10/8;
  max-width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  /* height: 15em; */
  /* width: 18em; */
}

.top {
  display: flex;
  align-items: center;
  justify-content: space-between;

  & .company {
    display: flex;
    align-items: center;
    gap: 10px;

    & img {
      width: 3em;
    }

    & p {
      font-size: 15px;
    }
  }

  & .type-contract {
    background-color: var(--laranja);
    display: flex;
    align-items: center;
    padding: 3px 15px;
    border-radius: 10px;
    font-weight: 500;
    font-size: 14px;
    color: var(--preto-claro);
  }
}

h3 {
  font-weight: 500;
  font-size: 26px !important;
}

.skills-container {
  display: flex;
  gap: 0.5vw;

  & .skills {
    border: 1px solid var(--cinza-escuro);
    color: var(--cinza-claro);
    font-size: 14px;
    padding: 8px 10px;
    border-radius: 12px;
  }
}

.bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;

  & p {
    color: var(--cinza-claro);
    font-size: 16px;
  }

  & .salary {
    font-size: 18px;
    color: var(--branco);
  }

  & .button-bt {
    background-color: var(--verde);
    color: var(--branco);
    border: none;
    border-radius: 10px;
    padding: 6px 18px;
    font-size: 14px;
    font-weight: 500;
  }
}

/* .btn {
  border: none;
  background-color: var(--laranja);
  padding: 0.8em 6rem;
  font-weight: bold;
  cursor: pointer;
  border-radius: 30px;
  font-size: 18.5px;
  color: var(--preto-escuro);
}

/* .box-info {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding-top: 9em;
} */

/* .title-card-info {
  font-size: 32px;
} */

/* .pt {
  padding-top: 1.5em;
  font-size: 24px;
}

.pt-4 {
  padding-top: 2.5em;
} */
</style>
