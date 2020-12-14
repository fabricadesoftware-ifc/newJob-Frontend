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
      <b-navbar-item tag="div">
        <a class="button">
          <router-link class="nav-text" to="/login">Entrar</router-link>
        </a>
      </b-navbar-item>
      <b-navbar-item tag="div">
        <a class="button has-background-grey-lighter">
          <router-link class="nav-text" to="/signup"
            ><strong>Cadastre-se</strong></router-link
          >
        </a>
      </b-navbar-item>
    </template>
  </b-navbar>
</template>

<style scoped>
.nav-color {
  background-color: aquamarine;
}

.nav-text {
  color: black;
}
</style>
