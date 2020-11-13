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
        <router-link to="/">Inicio</router-link>
      </b-navbar-item>
      <b-navbar-item href="#">
        <router-link to="/jobs">Vagas</router-link>
      </b-navbar-item>
    </template>

    <template slot="end">
      <b-navbar-item tag="div">
        <a class="button is-light">
          <router-link to="/login">Entrar</router-link>
        </a>
      </b-navbar-item>
      <b-navbar-item tag="div">
        <a class="button has-background-success">
          <router-link to="/signup"><strong>Cadastre-se</strong></router-link>
        </a>
      </b-navbar-item>
    </template>
  </b-navbar>
</template>
