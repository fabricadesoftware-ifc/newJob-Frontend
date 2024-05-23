<script setup>
import HeaderComponent from '../header/HeaderComponent.vue'
import { ArrowLeftThinCircleOutline, ArrowRightThinCircleOutline } from '../icons';
</script>

<template>
  <div class="container">
    <HeaderComponent />
    <div class="box-text">
      <div class="text">
        <h1>Vagas para</h1>
        <h1 class="gradient-text">Engenheiro Agrônomo</h1>
      </div>
      <div class="text-2">
        <p>
          "Estamos buscando engenheiros agrônomos  nossa
        </p>
        <p>altamente qualificados para se juntar à</p>
        <p>equipe dinâmicae inovadora”.</p>
      </div>
    </div>
    <div class="carrosel">
    <div class="box-img">
      <img src="https://i.ibb.co/K690q8v/img-carrosel-jobs.png" alt="" class="img">
    </div>
    <div class="buttons">
      <ArrowLeftThinCircleOutline class="arrow"/>
      <ArrowRightThinCircleOutline class="arrow"/>
    </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  background-color: #1d4734;
  padding: 100px;
}
.box-text{
  display: flex;
  justify-content: space-around;
  padding: 3em 0em 0em 0em;

}
.text{
  font-size: 1.25em;
  font-weight: normal;
}
.text-2{
  padding-top: 1.5em;
  font-size: 1em;
  width: 30%;
}

.box-img{
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 3em 0em 0em 0em;
}
.img{
  width: 90%;
}
.buttons{
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: auto; 
  width: 50px; 
  scale: 2;
  color: white;
  padding: 1.5em 0px 0px 0px;
}
.arrow {
  cursor: pointer;
  transition: transform 0.3s;
}

.arrow:hover {
  transform: scale(1.2);
}
.gradient-text {
  font-size: 2em; 
  background-image: linear-gradient(45deg, #ffffff, #ffffff, #555555);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

</style>
