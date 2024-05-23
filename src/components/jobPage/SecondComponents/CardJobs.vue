<template>
  <div class="container-card">
    <div class="logo-container">
      <img src="https://i.ibb.co/frvBp3K/Ellipse-6.png" alt="" class="logo">
    </div>
    <div class="box-info">
      <h3>BioAgric</h3>
      <h3 class="pt">Analista de infraestrutura</h3>
      <p>Curitiba, Paraná</p>
      <div class="pt-4">
      <button class="btn">Saiba mais</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container-card {
  background: radial-gradient(circle, rgba(42,105,76,1) 15%, rgba(30,72,53,1) 95%);
  border-radius: 1em;
  width: 23em;
  height: 21em;
  position: relative;
  margin-top: 100px;
}

.logo-container {
  position: absolute;
  top: -75px;  
  left: 50%;
  transform: translateX(-50%);
}

.logo {
  width: 150px;
}

.btn {
  border: none;
  background-color: #E09B6B;
  padding: 0.7em;
  font-weight: bold;
  cursor: pointer;
  width: 15em;
  border-radius: 30px;
  font-size: 17px;
}
.box-info{
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding-top: 5.6em;
}
.pt{
  padding-top: 1.5em;
}
.pt-4{
  padding-top: 2.5em;
}
h3{
  font-size: 1.3em;
}
p{
  font-size: 1.2em;
}
</style>
