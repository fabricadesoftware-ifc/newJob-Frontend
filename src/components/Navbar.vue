<template>
  <b-navbar class="is-white">
    <template slot="brand">
      <b-navbar-item tag="router-link" :to="{ path: '/' }">
        <img
          class="navbar-image"
          src="https://cecom.ifc.edu.br/wp-content/uploads/sites/17/2015/10/Logo_IFC_horizontal.png"
          alt="Lightweight UI components for Vue.js based on Bulma"
        />
      </b-navbar-item>
    </template>
    <template slot="start">
      <NavbarItem :to="'/'">Inicio</NavbarItem>
      <NavbarItem :to="'jobs'">Vagas</NavbarItem>
    </template>

    <template slot="end">
      <!-- <router-link v-if="!token" class="nav-text" to="/login">
        <b-navbar-item tag="div">
          <a class="button">
            <slot>Login</slot>
          </a>
        </b-navbar-item>
      </router-link> -->

      <NavbarItem v-if="!token" :to="'login'"
        ><a class="button">Login</a></NavbarItem
      >
      <b-navbar-item v-else>
        <NavbarDropDown />
      </b-navbar-item>
      <b-navbar-item tag="div">
        <a v-if="!token" class="button has-background-grey-lighter">
          <router-link class="nav-text" to="/signup"
            ><strong>Cadastre-se</strong></router-link
          >
        </a>
      </b-navbar-item>
    </template>
  </b-navbar>
</template>

<script>
// import { APIProfileGet } from '../services/api'
import { mapGetters } from 'vuex'
import NavbarItem from './NavbarItem'
import NavbarDropDown from './NavbarDropDown'

export default {
  computed: {
    ...mapGetters({ token: 'auth/hasToken' })
  },
  components: { NavbarItem, NavbarDropDown },
  data() {
    return {
      //   token: false,
      picture: null
    }
  },
  methods: {}
}
</script>

<style>
.nav-color {
  background-color: aquamarine;
}

.navbar-image {
  size: 5px;
}

.nav-text {
  color: black;
}
</style>
