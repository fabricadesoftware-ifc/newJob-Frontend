<script setup>
import CardJobs from './SecondComponents/CardJobs.vue';
import { ArrowLeftThinCircleOutline, ArrowRightThinCircleOutline } from '../icons';

</script>

<template>
  <div class="container">
    <div class="title-job">
      <img src="https://i.ibb.co/mbNR5y4/Group-1171274710.png" alt="" class="img-title" />
      <h2>Vagas</h2>
    </div>
    <div class="grid-container">
      <div class="container-card" v-for="index in 4" :key="index">
        <CardJobs />
      </div>
    </div>
      <div class="buttons">
      <ArrowLeftThinCircleOutline class="arrow"/>
      <ArrowRightThinCircleOutline class="arrow"/>
    </div>
  </div>
</template>

<style scoped>
.container {
  padding: 8em;
}

.title-job {
  display: flex;
  gap: 1em;
  padding-left: 8.5em;
}

.title-job > h2 {
  font-size: 34px;
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

.grid-container {
  display: grid;
  grid-template-columns: repeat(2, 1fr); 
  grid-template-rows: repeat(2, 1fr);    
  gap: 2em;
  justify-items: center;
  align-items: center;                             
}
.buttons{
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: auto; 
  width: 50px; 
  scale: 2;
  color: white;
  padding: 5em 0px 0px 0px;
}
.arrow {
  cursor: pointer;
  transition: transform 0.3s;
}

.arrow:hover {
  transform: scale(1.2);
}

</style>
