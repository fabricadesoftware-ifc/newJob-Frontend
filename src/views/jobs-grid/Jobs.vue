<template>
  <div class="JobGrid">
    <div class="carousel mb-4">
      <Carousel :jobs="content" />
    </div>
    <div class="jobs container">
      <CardGrid :content="content" />
    </div>
  </div>
</template>

<script>
import Carousel from '@/components/Carousel'
import CardGrid from '@/components/CardGrid'
import SideMenu from '@/components/SideMenu'
export default {
  components: { Carousel, CardGrid, SideMenu },
  data() {
    return {
      content: [
        {
          id: 1,
          company: 'JBS',
          img:
            'https://agroemdia.com.br/wp-content/uploads/2020/04/logo-jbs-mc.jpg',
          date: '10-10-2020',
          local: 'Trindade do Sul - RS',
          role: 'Analista de Agropecuária',
          description:
            'Quia illum ex consequuntur commodi quia exercitationem aut. In facere tempora libero quia porro. Cupiditate cum voluptatibus.'
        },
        {
          id: 2,
          company: 'Nestle',
          img:
            'https://www.talkwalker.com/Pictures/Brands/small/csm-talkwalker-nestle-2197e394de.jpg',
          date: '10-10-2020',
          local: 'Trindade do Sul - RS',
          role: 'Supervisor de Fabricação',
          description:
            'Est dolorem et est id maxime voluptas. Totam soluta porro neque molestias atque ut id quia. Adipisci magnam qui aut perspiciatis laborum. Soluta et eos voluptatum reprehenderit et est.'
        },
        {
          id: 3,
          company: 'Grupo Brasilia',
          img:
            'https://ncdn0.infojobs.com.br/logos/Company_Evaluation/158385.jpg',
          date: '10-10-2020',
          local: 'Trindade do Sul - RS',
          role: 'Analista de Agropecuária',
          description: 'Descrição 1 Descrição 1 Descrição 1 '
        },
        {
          id: 4,
          company: 'Pamplona',
          img:
            'https://pamplona.com.br/pages/pamplona/images/hotsite/img/logo-pamplona.png',
          date: '10-10-2020',
          local: 'São Paulo - SP',
          role: 'Técnico em Agropecuária',
          description:
            'Ipsa ut ab voluptas est neque dolorum sed hic harum. Officiis delectus voluptas vero sint. Et aliquam ab ut.'
        },
        {
          id: 5,
          company: 'JBS',
          img: 'https://friboi.com.br/images/friboi.png',
          date: '10-10-2020',
          local: 'Araquari - SC',
          role: 'Chefe de Produção',
          description:
            'Quo vel esse odio est expedita odit qui qui ex. Alias perspiciatis veritatis. Ad voluptatum nam soluta in ratione alias veritatis labore debitis.'
        }
      ]
    }
  }
}
</script>

<style></style>
