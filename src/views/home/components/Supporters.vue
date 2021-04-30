<template>
  <section class="container is-max-desktop">
    <h1 class="title is-medium">Depoimento dos Usuários</h1>
    <b-carousel class="box" :indicator-inside="false">
      <b-carousel-item v-for="item in items" :key="item.id">
        <span class="mb-4">
          <h1>{{ item.description }}</h1>
          <section class="section">
            <div class="container">
              <h2 class="subtitle">
                A simple container to divide your page into
                <strong>sections</strong>, like the one you're currently reading
              </h2>
            </div>
          </section>
        </span>
      </b-carousel-item>
      <template slot="indicators" slot-scope="props">
        <figure class="al image is-64x64 ">
          <img
            class="is-rounded"
            :src="items[props.i].image"
            :title="items[props.i].name"
          />
        </figure>
      </template>
    </b-carousel>
  </section>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          id: 1,
          name: 'Ebba Predovic',
          description:
            'Nulla molestiae sint ipsa et vel nostrum assumenda. Est vero voluptas. Et odit accusamus. Pariatur illo harum id cupiditate. Commodi non sed optio fugit rerum ut. Non aut eius est distinctio.',
          image: 'https://randomuser.me/api/portraits/men/46.jpg'
        },
        {
          id: 2,
          name: 'Edythe Schowalter',
          description:
            'Amet non recusandae ut dolor eos impedit. Provident qui eius quidem possimus repudiandae vel placeat qui at. Quod quos quidem adipisci deleniti totam.',
          image: 'https://randomuser.me/api/portraits/men/97.jpg'
        },
        {
          id: 3,
          name: 'Jamal Runte',
          description: 'Amet rem corrupti possimus quibusdam.',
          image: 'https://uifaces.co/our-content/donated/gPZwCbdS.jpg'
        }
        // {
        //   id: 4,
        //   name: 'Jamal Runte',
        //   description: 'Amet rem corrupti possimus quibusdam.',
        //   image: 'https://uifaces.co/our-content/donated/gPZwCbdS.jpg'
        // }
      ]
    }
  },
  methods: {
    getImgUrl(value) {
      return `https://picsum.photos/id/43${value}/1230/500`
    }
  }
}
</script>

<style>
.is-active .al img {
  filter: grayscale(0%);
}
.al img {
  filter: grayscale(100%);
}
</style>
