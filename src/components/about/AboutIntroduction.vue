<script setup>
import { useJobStore } from "@/stores";
const job = useJobStore();
</script>

<template>
  <div class="container">
    <div class="content-container">
      <h1>{{ job.currentJob.title }}</h1>
      <p>Data limite: {{ job.currentJob.deadline }}</p>
      <p>
        Cidade: {{ job.currentJob.local.city }}, {{ job.currentJob.local.state.initials }}
      </p>
      <div class="logo-container">
        <span class="top-border"></span>
        <img :src="job.currentJob.image_job? job.currentJob.image_job.file: `https://i.ibb.co/9GMPt74/image-removebg-preview.png`" alt="" />
        <span class="bot-border"></span>
      </div>
    </div>
    <p class="description-text">
      {{ job.currentJob.description }}
    </p>
  </div>
</template>

<style scoped>
.description-text {
  font-size: 1.4rem;
  max-width: 100%;
  margin: 3rem 4rem;
  font-weight: 300;
}

.top-border {
  width: 2rem;
  height: 2rem;
  background-color: transparent;
  position: absolute;
  bottom: calc(100% - 8px);
  right: -5px;
  border-radius: 50%;
  border-bottom: #1d4734 solid 10px;
  rotate: -45deg;
}

.bot-border {
  width: 2rem;
  height: 2rem;
  background-color: transparent;
  position: absolute;
  top: calc(100% - 8px);
  right: -5px;
  border-radius: 50%;
  border-bottom: #235540 solid 10px;
  rotate: 220deg;
}

.logo-container {
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  right: 0;
  bottom: 7%;
  background: linear-gradient(#1d4734, #235540);
  padding: 1rem 1rem 1rem 2rem;
  width: 10%;
  border-radius: 1rem 0 0 1rem;
}

.logo-container img {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  border: #fff 4px solid;
  object-fit: cover;
}

.content-container {
  position: relative;
  padding: 10% 0 0 5%;
  background-image: url(https://i.ibb.co/fxC5245/image.png);
  background-size: cover;
  background-position: center;
  height: 75vh;
  border-radius: 1rem;
  filter: saturate(1.2);
}

p {
  max-width: 30%;
  color: #ffffffc9;
  font-size: 0.9rem;
}

h1 {
  background: -webkit-linear-gradient(left, #c9c9c9 0%, #fff 50%, #ffffff4b 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  max-width: 80%;
  font-size: 5rem;
  font-weight: 600;
  text-transform: uppercase;
  margin: 3vh 0;
}

.image-btn span {
  translate: 0 10%;
}

.container {
  position: relative;
  max-width: 100%;
  min-height: 100vh;
  background: linear-gradient(28deg, #1d4734 30%, #29634b, #1d4734 70%);
  padding: 1rem;
}
</style>
