<template>
    <div class="content-container">
        <span class="title">
            <img src="https://i.ibb.co/1Z5CPWL/about-icon.png" alt="">
            <p>Detalhes da vaga</p>
        </span>
        <ul>
            <li>Cargo: Analista de infraestrutura</li>
            <li>Benefícios: Plano de Saúde + Ticket Alimentação + PPR + Alimentação na empresa;</li>
            <li>Vaga para deficientes: Sim</li>
            <li>Salário: A Combinar</li>
        </ul>
        <span class="title">
            <img src="https://i.ibb.co/1Z5CPWL/about-icon.png" alt="">
            <p>Requisitos</p>
        </span>
        <ul>
            <li>Cargo: Analista de infraestrutura</li>
            <li>Benefícios: Plano de Saúde + Ticket Alimentação + PPR + Alimentação na empresa;</li>
            <li>Vaga para deficientes: Sim</li>
            <li>Salário: A Combinar</li>
        </ul>
        <button>CANDIDATAR-SE À VAGA</button>
    </div>
</template>

<style scoped>
button{
    background-color: #E09B6B;
    color: #000;
    font-weight: 600;
    width: 20%;
    padding: 1.3rem;
    border: none;
    border-radius: 4rem;
    margin: 3rem auto;
}

ul {
    color: #fff;
    list-style-type: none;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin: 3rem 0;
    font-size: 1.1rem;
}

.title {
    display: flex;
    gap: 1rem;
    align-items: center;
    font-size: 1.5rem;
}

img {
    width: 8%;
}

.content-container {
    max-width: 100%;
    padding: 5%;
    display: flex;
    flex-direction: column;
}
</style>