<template>
  <div class="">
    <DescriptionHero
      msg="Sobre a vaga
Esta posição será baseada em Alta Floresta/ MT




Na Zoetis, nossos colegas fazem a diferença e impulsionam nosso sucesso. Independentemente da sua função, você terá um senso de propriedade aqui. Você terá a oportunidade de colaborar em nosso ambiente diversificado e inclusivo, a capacidade de aprender e crescer em sua carreira e a chance de causar um impacto direto em nossos negócios e clientes. Seja ajudando animais de estimação a terem uma vida mais longa, mais feliz e saudável ou ajudando a garantir uma nutrição segura e acessível para as pessoas através de animais mais saudáveis, estamos agregando valor ao mundo e esperamos que você se junte a nós

O time da unidade de negócios de bovinos e equinos está buscando um Consultor Técnico inovador e altamente motivado que queira contribuir e levar o que melhor temos em tecnologia aos Produtores de animais. O time trabalha com todo o ciclo de cuidado contínuo (predição, prevenção, detecção e tratamento) dos animais e tem como objetivo ajudar o produtor a ser mais eficiente em sua produção."
      title="Engenheiro Agronomo"
      ><br /><button class="button is-black mt-2">
        <router-link class="has-text-white " to="/jobs"
          >Inscreva-se</router-link
        >
      </button></DescriptionHero
    >
    <div class="description is-full mt-5">
      <p class="title">Localização</p>
      <p class="subtitle">Campo Grande - MT</p>
      <br />
      <div class="center">
        <GoogleMaps />
      </div>
    </div>
  </div>
</template>

<script>
import DescriptionHero from '@/components/jobs-grid/DescriptionHero'
import GoogleMaps from '@/components/google/GoogleMaps'
export default {
  components: { DescriptionHero, GoogleMaps }
}
</script>

<style></style>
