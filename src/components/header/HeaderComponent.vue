<template>
  <div class="container-wrapper">
    <div>
      <img src="https://i.ibb.co/y0NZsrZ/logo-new-job.png" alt="" class="logo" />
    </div>
    <div class="links-container">
      <router-link to="/">Início</router-link>
      <router-link to="/jobs">Vagas</router-link>
      <router-link to="/profile">Perfil</router-link>
    </div>
    <div class="user-links links-container">
      <router-link to="/login">Login</router-link>
      <router-link class="register" to="/signUp">Cadastre-se</router-link>
    </div>
  </div>
</template>


<style scoped>
.router-link-active {
  border-radius: 2rem;
  border: 1px solid black;
  padding: .2rem 1rem;
}

.container-wrapper {
  position: absolute;
  width: 100%;
  max-width: 100vw;
  top: 0px;
  z-index: 1;
  display: flex;
  justify-content: space-between;
  background-color: transparent;
  padding: 2.5em 0;

  & .user-links {
    padding: .2rem .2rem;

    & a:first-child {
      margin: 0 1rem;
    }
  }

  & .logo {
    width: 10.5em;
  }

  & .logo,
  .links-container {
    margin: 0 3rem;
  }


  & .links-container {
    display: flex;
    align-items: center;
    background-color: white;
    border-radius: 5em;
    color: #000000;
    padding: .5rem .4em;
  }

  & .links-container>a {
    color: black;
    font-size: 15px;
    cursor: pointer;
    margin: 0 .4rem;
  }


  & .register {
    background-color: #1d4734;
    color: white !important;
    padding: 0.5em 0.9em;
    border-radius: 5em;
  }
}
</style>