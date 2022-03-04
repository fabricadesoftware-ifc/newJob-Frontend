<template>
  <div class="container">
    <DescriptionHero :job="job"
      ><br /><button class="button is-black mt-2">
        <router-link class="has-text-white " to="/jobs"
          >Inscreva-se ue</router-link
        >
      </button></DescriptionHero
    >
    <div class="description is-full mt-5">
      <p class="title">{{ job.local }}</p>
      <p class="subtitle"></p>
      <br />
      <div class="center">
        <GoogleMaps :lat="job.lat" :lng="job.lng" />
      </div>
    </div>
  </div>
</template>

<script>
import DescriptionHero from '@/components/jobs-grid/DescriptionHero'
import GoogleMaps from '@/components/google/GoogleMaps'
import jobsApi from '@/services/jobsApi'
export default {
  props: { job: Object },
  components: { DescriptionHero, GoogleMaps },
  data() {
    return {
      job: {},
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
            'Quia illum ex consequuntur commodi quia exercitationem aut. In facere tempora libero quia porro. Cupiditate cum voluptatibus.',
          lat: -27.5243628,
          lng: -52.9048609
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
            'Est dolorem et est id maxime voluptas. Totam soluta porro neque molestias atque ut id quia. Adipisci magnam qui aut perspiciatis laborum. Soluta et eos voluptatum reprehenderit et est.',
          lat: -27.5243628,
          lng: -52.9048609
        },
        {
          id: 3,
          company: 'Grupo Brasilia',
          img:
            'https://ncdn0.infojobs.com.br/logos/Company_Evaluation/158385.jpg',
          date: '10-10-2020',
          local: 'Trindade do Sul - RS',
          role: 'Analista de Agropecuária',
          description: 'Descrição 1 Descrição 1 Descrição 1 ',
          lat: -27.5243628,
          lng: -52.9048609
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
            'Ipsa ut ab voluptas est neque dolorum sed hic harum. Officiis delectus voluptas vero sint. Et aliquam ab ut.',
          lat: -23.6815315,
          lng: -46.8754812
        },
        {
          id: 5,
          company: 'JBS',
          img: 'https://friboi.com.br/images/friboi.png',
          date: '10-10-2020',
          local: 'Araquari - SC',
          role: 'Chefe de Produção',
          description:
            'Quo vel esse odio est expedita odit qui qui ex. Alias perspiciatis veritatis. Ad voluptatum nam soluta in ratione alias veritatis labore debitis.',
          lat: -26.3766306,
          lng: -48.7276432
        }
      ]
    }
  },
  async beforeCreate() {
    this.job = await jobsApi.getJob(this.$route.params.id)
    console.log(this.job)
  },
  created() {
    // console.log(this.$route.params.id)
    // let index = this.content.findIndex(job => job.id == this.$route.params.id)
    // this.job = this.content[index]
    // console.log(this.job)
  }
}
</script>

<style></style>
