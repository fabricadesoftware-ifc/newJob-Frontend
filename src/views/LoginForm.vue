<template>
  <section class="login-form mt-2">
    <div class="form container">
      <b-field
        label="Usuário ou Email"
        :type="types.email"
        :message="messages.email"
      >
        <b-input placeholder="Usuário ou Email" v-model="email"></b-input>
      </b-field>

      <b-field
        label="Senha"
        :type="types.password"
        :message="messages.password"
      >
        <b-input
          placeholder="Senha"
          type="password"
          v-model="password"
          password-reveal
        ></b-input>
      </b-field>

      <b-button @click="log" type="is-primary" outlined>Entrar</b-button>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      messages: {
        username: '',
        email: '',
        password: ''
      },
      types: {
        username: '',
        email: '',
        password: ''
      },
      email: '',
      username: '',
      password: ''
    }
  },
  methods: {
    log() {
      console.log(this.username)
      console.log(this.email)
      console.log(this.password)
    }
  }
}
</script>

<style scoped>
/* .login-form {
  background-color: #e1e1e1;
}

.login-form .form {
  width: 55%;
  background-color: #aaaaaa;
}

@media screen and (max-width: 700px) {
  .form {
    width: 85%;
  }
} */
</style>
