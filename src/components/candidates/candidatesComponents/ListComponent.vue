<script setup>
import { HeartOutline } from "@/components/icons";

const list = [
  {
    image: "",
    name: "Natasha Russo dos Santos",
    email: "natasha@gmail.com",
    academic: "Graduação",
  },
  {
    image: "",
    name: "Natasha Russo dos Santos",
    email: "natasha@gmail.com",
    academic: "Graduação",
  },
  {
    image: "",
    name: "Natasha Russo dos Santos",
    email: "natasha@gmail.com",
    academic: "Graduação",
  },
  {
    image: "",
    name: "Natasha Russo dos Santos",
    email: "natasha@gmail.com",
    academic: "Graduação",
  },
  {
    image: "",
    name: "Natasha Russo dos Santos",
    email: "natasha@gmail.com",
    academic: "Graduação",
  },
  {
    image: "",
    name: "Natasha Russo dos Santos",
    email: "natasha@gmail.com",
    academic: "Graduação",
  },
  {
    image: "",
    name: "Natasha Russo dos Santos",
    email: "natasha@gmail.com",
    academic: "Graduação",
  },
  {
    image: "",
    name: "Natasha Russo dos Santos",
    email: "natasha@gmail.com",
    academic: "Graduação",
  },
  {
    image: "",
    name: "Natasha Russo dos Santos",
    email: "natasha@gmail.com",
    academic: "Graduação",
  },
];
</script>

<template>
  <div class="container">
    <div class="list-container">
      <div class="candidate-container" v-for="candidate in list" :key="candidate">
        <img :src="candidate.image" alt="" />
        <span>
          <p>Nome</p>
          <p>{{ candidate.name }}</p>
        </span>
        <span>
          <p>E-mail</p>
          <p>{{ candidate.email }}</p>
        </span>
        <span>
          <p>Formação acadêmica</p>
          <p>{{ candidate.academic }}</p>
        </span>
        <a>Currículo</a>
        <HeartOutline fill-color="#255A42" />
      </div>
    </div>
    <div class="navigation">
      <button>Anterior</button>
      <button>Próximo</button>
    </div>
  </div>
</template>

<style scoped>
.container {
  width: 70vw;
  display: flex;
  flex-direction: column;
}

.list-container {
  margin-top: 4vh;
  width: 100%;
}

.candidate-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 13px;
  border: #505050 1px solid;
  background-color: #242424;
  padding: 1vh 1vw;
  margin-bottom: 3vh;
  font-size: 0.8rem;
  transition: all .2s ease-in-out;

  & img {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background-color: #1D4734;
  }

  & span p:first-of-type {
    color: #a0a0a0;
  }

  & span:last-of-type {
    display: flex;
  }

  a {
    text-decoration: none;
    color: #ffffff;
    cursor: pointer;
  }
}

.candidate-container:hover {
  border: 1px solid #e09b6b;
}

.navigation {
  display: flex;
  justify-content: space-between;
  width: 100%;

  & button {
    background-color: #e09b6b;
    color: #000000;
    border-radius: 6px;
    padding: 1vh 1vw;
    border: none;
    outline: none;
  }
}
</style>
