<script setup>
defineProps(["image", "company", "title", "local", "id"]);
</script>
<template>
  <div class="container-card">
    <div class="logo-container">
    {{console.log(image)}}
      <img :src="image? image.file: `https://i.ibb.co/9GMPt74/image-removebg-preview.png`" alt="" class="logo"/>
    </div>
    <div class="box-info">
      <h3 class="title-card-info">{{ company }}</h3>
      <h3 class="pt">{{ title }}</h3>
      <p>{{ local.state.name }}, {{ local.city }}</p>
      <div class="pt-4">
        <routerLink :to="'/about/'+id" class="btn" @click="getJob(id)">Saiba mais</routerLink>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container-card {
  background: radial-gradient(circle, rgba(42, 105, 76, 1) 15%, rgba(30, 72, 53, 1) 95%);
  border-radius: 1em;
  width: 30em;
  height: 28em;
  position: relative;
  margin-top: 100px;
}

.logo-container {
  position: absolute;
  top: -85px;
  left: 50%;
  transform: translateX(-50%);
}

.logo {
  width: 190px;
  height: 190px;
  border-radius: 50%;
  object-fit: cover;
}

.btn {
  border: none;
  background-color: #e09b6b;
  padding: 0.8em 6rem;
  font-weight: bold;
  cursor: pointer;
  border-radius: 30px;
  font-size: 18.5px;
  color: #000000;
}

.box-info {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding-top: 9em;
}

.title-card-info {
  font-size: 32px;
}

.pt {
  padding-top: 1.5em;
  font-size: 24px;
}

.pt-4 {
  padding-top: 2.5em;
}

h3 {
  font-size: 1.3em;
}

p {
  font-size: 1.2em;
}
</style>
