<template>
  <div class="container-wrapper">
    <div class="logo-container">
      <img src="https://i.ibb.co/y0NZsrZ/logo-new-job.png" alt="" class="logo" />
    </div>
    <div class="links-container">
      <div class="links">
        <router-link to="/">Início</router-link>
        <router-link to="/jobs">Vagas</router-link>
        <router-link to="/profile">Perfil</router-link>
      </div>
    </div>
    <div class="links-container">
      <div class="links">
        <router-link to="/login">Login</router-link>
        <router-link class="register" to="/signUp">Cadastre-se</router-link>
      </div>
    </div>
  </div>
</template>

<style scoped>
.logo-container {
  width: 33.3%;
  margin-left: 1vw;
}

.router-link-active {
  border-radius: 14px;
  border: 1px solid black;
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
  padding: 2.5vh 0;

  & .logo {
    width: 10vw;
    min-width: 100px;
  }

  & .links-container {
    width: 33.3%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  & .links-container:last-of-type {
    justify-content: right;
    margin-right: 1vw;
  }

  & .links {
    display: flex;
    align-items: center;
    background-color: white;
    border-radius: 5em;
    color: #000000;
    padding: 0 0.5vw;
    height: 6vh;
    width: fit-content;
    min-height: 30px;
  }

  & .links-container a {
    color: black;
    font-size: 15px;
    cursor: pointer;
    padding: 0.3vh 1vw;
  }

  & .register {
    background-color: #1d4734;
    color: white !important;
    padding: 0.3vh 1vw;
    border-radius: 13px;
  }
}
</style>
