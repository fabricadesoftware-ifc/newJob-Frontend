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
      <h1 v-else>foto aqui</h1>
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
import api from '../services/api'

export default {
  data() {
    return {
      token: false,
      picture: null
    }
  },
  methods: {
    handleLogout() {
      localStorage.removeItem('token')
      console.log('token removido')
    }
  },
  async mounted() {
    const token = localStorage.getItem('token')
    // console.log(token)
    if (token) {
      console.log('tem token')
      this.token = true

      const profile = await api.get('v1/accounts/profile/', {
        headers: {
          Authorization: `${localStorage.getItem('token')}`
        }
      })

      console.log(profile.data.avatar)
      //   if (profile.data.avatar === null) {
      //   }
    } else {
      this.token = false
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
