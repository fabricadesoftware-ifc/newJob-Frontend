<script setup>
import { ArrowTopRight } from '../icons';

</script>

<template>
    <div class="container">
        <img class="bg-img" src="https://i.ibb.co/6gZqqxG/line-bg.png" alt="">
        <div class="image-container">
            <span class="main-image">
            </span>
            <button class="image-btn">
                <ArrowTopRight size="60" />
            </button>
        </div>
        <div class="content-container">
            <h1>Vagas agrícolas para diversas habilidades.</h1>
            <p>New Job Agri Business é um software inovador projetado para revolucionar o setor de recrutamento
                agrícola. Nosso objetivo é criar uma ponte entre profissionais talentosos e empresas agrícolas em busca
                de mão de obra qualificada.</p>
            <img src="https://i.ibb.co/f1cn1Rv/agri-logo.png" alt="">
        </div>
    </div>
</template>

<style scoped>
.content-container {
    position: relative;
    padding: 10% 0 0 5%;
}

.content-container img{
    width: 10%;
    margin: 2% 0;
}

p {
    max-width: 30%;
    color: #FFFFFF99;
    font-size: .9rem;
}

h1 {
    background: -webkit-linear-gradient(left, #c9c9c9 0%, #fff 50%, #ffffff4b 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    max-width: 80%;
    font-size: 4rem;
    font-weight: 600;
}

.image-btn {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    right: 5%;
    top: -5%;
    background-color: #E09B6B;
    border: none;
    width: 6rem;
    height: 6rem;
    border-radius: 50%;
}

.image-btn span {
    translate: 0 10%;
}

.container {
    position: relative;
    width: 100%;
    min-height: 100vh;
    background: linear-gradient(28deg, #1D4734 30%, #29634b, #1D4734 70%);
}

.main-image {
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 40em;
    rotate: 6deg;
    box-shadow: 0px -40px 70px 10px #000 inset,
        -10px 5px 0px #000000a1,
        5px 5px 0px #000000a1;
    background-color: #ffffff;
    background: url("https://i.ibb.co/RgKjgKf/image.png");
    opacity: 80%;
    background-size: cover;
}

.image-container {
    position: absolute;
    right: 6%;
    bottom: 8%;
    width: 50%;
    height: 55%;
}

.bg-img {
    position: absolute;
    right: 0;
    filter: brightness(3) opacity(30%);
    height: 90%;
}
</style>