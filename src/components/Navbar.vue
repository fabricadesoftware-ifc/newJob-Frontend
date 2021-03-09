<template>
  <b-navbar class="is-white">
    <template slot="brand">
      <b-navbar-item tag="router-link" :to="{ path: '/' }">
        <img
          src="https://cecom.ifc.edu.br/wp-content/uploads/sites/17/2015/10/Logo_IFC_horizontal.png"
          alt="Lightweight UI components for Vue.js based on Bulma"
        />
      </b-navbar-item>
    </template>
    <template slot="start">
      <b-navbar-item href="#">
        <router-link class="nav-text" to="/">Inicio</router-link>
      </b-navbar-item>
      <b-navbar-item href="#">
        <router-link class="nav-text" to="/jobs">Vagas</router-link>
      </b-navbar-item>
    </template>

    <template slot="end">
      <b-navbar-item v-if="!token" tag="div">
        <a class="button">
          <router-link class="nav-text" to="/login">Entrar</router-link>
        </a>
      </b-navbar-item>
      <a v-else @click="handleProfile">
        <figure class="image is-32x32">
          <img src="https://bulma.io/images/placeholders/128x128.png" />
        </figure>
      </a>
      <b-navbar-item tag="div">
        <a v-if="!token" class="button has-background-grey-lighter">
          <router-link class="nav-text" to="/signup"
            ><strong>Cadastre-se</strong></router-link
          >
        </a>
        <a
          v-else
          class="button has-background-grey-lighter"
          @click="handleLogout"
        >
          <router-link class="nav-text" to="/"
            ><strong>Logout</strong></router-link
          >
        </a>
      </b-navbar-item>
    </template>
  </b-navbar>
</template>

<script>
// import { APIProfileGet } from '../services/api'
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters({ token: 'auth/hasToken' })
  },
  data() {
    return {
      //   token: false,
      picture: null
    }
  },
  methods: {
    handleLogout() {
      localStorage.removeItem('token')
      console.log('token removido')
      this.$router.push({ name: 'Home' })
    },
    handleProfile() {
      this.$router.push({ name: 'Profile' })
    }
  }
}
</script>

<style scoped>
.nav-color {
  background-color: aquamarine;
}

.nav-text {
  color: black;
}
</style>
