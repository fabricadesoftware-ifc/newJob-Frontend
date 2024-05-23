<script setup>
import { Plus } from '../../icons/index.js';

</script>

<template>
    <div class="container">
        <div class="about-container">
            <span class="about-title">
                <img src="https://i.ibb.co/1Z5CPWL/about-icon.png" alt="">
                <h2>Sobre nós</h2>
            </span>
            <p>A NewJob permite que os indivíduos com diversas habilidades e experiências tenham acesso a oportunidades
                no setor agrícola. Seja você um engenheiro agrônomo, um técnico em irrigação ou alguém com habilidades
                manuais para o trabalho no campo, a NewJob tem algo para você.</p>
            <button>Saiba mais</button>
        </div>
        <div class="info-container">
            <h1>CONECTANDO TALENTOS AO SETOR AGRÍCOLA</h1>
            <p>New Job Agro business é mais do que apenas um software de busca de empregos - é uma plataforma que visa
                fortalecer o setor agrícola, conectando empresas e profissionais de maneira eficiente e eficaz. Junte-se
                a nós hoje e descubra como podemos transformar sua jornada de busca de emprego ou recrutamento.</p>
            <div class="numbers-conteiner">
                <span class="info">
                    <span class="number">105
                        <span class="icon">
                            <Plus size="40" />
                        </span>
                    </span>
                    <p>Empresas</p>
                </span>
                <span class="info">
                    <span class="number">7000
                        <span class="icon">
                            <Plus size="40" />
                        </span>
                    </span>
                    <p>Empresas</p>
                </span>
                <span class="info">
                    <span class="number">5000
                        <span class="icon">
                            <Plus size="40" />
                        </span>
                    </span>
                    <p>Empresas</p>
                </span>
            </div>

        </div>
    </div>
</template>

<style scoped>
.number {
    display: flex;
    color: #fff;
    gap: .1rem;
    font-weight: 500;
    font-size: 2.8rem;
}

.info {
    display: flex;
    flex-direction: column;
    align-items: normal;
    gap: 0;
}

.info p {
    margin-top: 0;
}

.icon {
    color: #E09B6B;
}

.info-container {
    width: 50%;
    margin-left: 10%;
}

.numbers-conteiner {
    display: flex;
    justify-content: space-between;
    width: 80%;
    margin-top: 2.3rem;
}

h1 {
    background: -webkit-linear-gradient(left, #c9c9c9 0%, #fff 50%, #ffffff4b 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-size: 3rem;
}

span {
    display: flex;
    align-items: center;
    gap: 1.5rem;
}

img {
    width: 6rem;
}

button {
    background-color: #E09B6B;
    padding: .6rem 2em;
    font-weight: 600;
    border: none;
    border-radius: 3rem;
    margin-top: 2rem;
}

.about-title {
    display: flex;
    margin-bottom: 3rem;
}


h2 {
    font-size: 2rem;
    font-weight: 400;
}

.container {
    display: flex;
    padding: 15vh 5vw;
}

.about-container {
    width: 35%;
}

p {
    color: #A0A0A0;
    font-size: .8rem;
    width: 80%;
    margin-top: 1rem;
}
</style>