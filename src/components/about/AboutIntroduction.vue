<script setup>
import { ArrowTopRight } from '../icons';

</script>

<template>
    <div class="container">
        <div class="content-container">
            <h1>Analista de infraestrutura.</h1>
            <p class="main-description">Estamos buscando um Analista de Infraestrutura de TI Pleno para se juntar à
                nossa equipe de tecnologia. O
                candidato será responsável por manter e otimizar nossa infraestrutura de TI, garantindo a eficiência dos
                sistemas.</p>
            <p>Código da Vaga: 2494214</p>
            <p>Cidade: Brasília, DF</p>
            <div class="logo-container">
                <span class="top-border"></span>
                <img src="https://i.ibb.co/9GMPt74/image-removebg-preview.png" alt="">
                <span class="bot-border"></span>
            </div>
        </div>
        <p class="description-text">
            Estamos buscando um Analista de Infraestrutura de TI Pleno para se juntar à nossa equipe de tecnologia. O
            candidato será responsável por manter e otimizar nossa infraestrutura de TI, garantindo a eficiência
            dos sistemas.</p>
    </div>

</template>

<style scoped>
.description-text {
    font-size: 1.5rem;
    max-width: 100%;
    margin: 3rem 4rem;
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
    bottom: 13%;
    background: linear-gradient(#1d4734, #235540);
    padding: 2rem 3rem;
    width: 10%;
    border-radius: 1rem 0 0 1rem;
}

.logo-container img {
    width: 90%;
}

.main-description {
    margin: 1rem 0;
}

.content-container {
    position: relative;
    padding: 10% 0 0 5%;
    background-image: url(https://i.ibb.co/60T9t9z/image.png);
    background-size: cover;
    height: 75vh;
    border-radius: 1rem;
    filter: saturate(1.2);
}

p {
    max-width: 30%;
    color: #ffffffc9;
    font-size: .9rem;
}

h1 {
    background: -webkit-linear-gradient(left, #c9c9c9 0%, #fff 50%, #ffffff4b 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    max-width: 80%;
    font-size: 4rem;
    font-weight: 600;
    text-transform: uppercase;
}

.image-btn span {
    translate: 0 10%;
}

.container {
    position: relative;
    max-width: 100%;
    min-height: 100vh;
    background: linear-gradient(28deg, #1D4734 30%, #29634b, #1D4734 70%);
    padding: 1rem;
}
</style>