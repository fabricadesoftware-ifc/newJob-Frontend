<script setup>
const props = defineProps({
    side: String,
    image: String
})

const teste = 'left' 
</script>

<template>
    <div class="container">
        <img class="logo" :style="{[props.side]: 0}" src="https://i.ibb.co/6g5QTs3/logo-newjob-png.png" alt="">
        <img class="big-image" :src="image" alt="">
        <img class="new-agro-logo" src="https://i.ibb.co/f1cn1Rv/agri-logo.png" alt="">
    </div>
</template>

<style scoped>
.container {
    background: linear-gradient(45deg,#1E4835 30%, #22583f 50%, #1E4835 70%);
    height: 100vh;
    width: 50%;
    display: flex;
    flex-direction: column;
    position: relative;
}

.logo {
    position: absolute;
    width: 20%;
    padding: 4% 5%;
}

.big-image {
    width: 70%;
    border-radius: 50%;
    margin: 10% auto 

}

.new-agro-logo {
    width: 20%;
    translate: 300% -100%;
}
</style>