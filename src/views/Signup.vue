<template>
  <section class="login-form mt-2">
    <div class="form container">
      <b-field label="Nome" :type="types.name" :message="messages.name">
        <b-input placeholder="Nome" v-model="name"></b-input>
      </b-field>

      <b-field label="Email" :type="types.email" :message="messages.email">
        <b-input placeholder="Email" type="email" v-model="email"></b-input>
      </b-field>

      <b-field
        label="Usuário"
        :type="types.username"
        :message="messages.username"
      >
        <b-input
          placeholder="Usuário"
          v-model="username"
          maxlength="30"
        ></b-input>
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

      <b-field label="Gênero">
        <b-select placeholder="Selecione um gênero" v-model="gender">
          <option value="1">Feminino</option>
          <option value="2">Masculino</option>
          <option value="3">Não-binário</option>
          <option value="0">Outro</option>
        </b-select>
      </b-field>
      <b-button @click="log" type="is-black" outlined>Enviar</b-button>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      messages: {
        name: '',
        email: '',
        username: '',
        password: ''
      },
      types: {
        name: '',
        email: '',
        username: '',
        password: ''
      },
      name: '',
      email: '',
      username: '',
      password: '',
      gender: ''
    }
  },
  methods: {
    log() {
      console.log(this.name)
      console.log(this.email)
      console.log(this.username)
      console.log(this.password)
      console.log(this.gender)
    }
  }
}
</script>

<style scoped>
.login-form {
  background-color: #e1e1e1;
  /* background-color: #000000; */
}

/* .login-form .form {
  width: 55%;
  background-color: #aaaaaa;
}

@media screen and (max-width: 700px) {
  .form {
    width: 85%;
  }
} */
</style>
