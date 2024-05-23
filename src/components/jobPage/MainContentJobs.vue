<script setup>
import CardJobs from './SecondComponents/CardJobs.vue';
</script>

<template>
  <div class="container">
    <div class="title-job">
      <img src="https://i.ibb.co/mbNR5y4/Group-1171274710.png" alt="" class="img-title" />
      <h2>Vagas</h2>
    </div>
    <div class="container-card" >
        <div class="card" v-for="index in 4" :key="index" >
            <CardJobs />
        </div>
    </div>
  </div>
</template>

<style scoped>
.title-job {
  display: flex;
  gap: 1em;
}
.title-job > h2 {
  font-weight: normal;
  display: flex;
  justify-content: center;
  align-items: center;
}
.img-title {
  width: 80px;
}
.container-card {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.card {
  flex-basis: calc(50% - 1em); /* Largura de 50% com margem de 1em */
  margin-bottom: 1em; 
}
</style>
