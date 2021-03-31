<template>
  <section class="login-form mt-3">
    <div class="title">Login</div>
    <div class="form container">
      <b-field
        label="Usuário ou Email"
        :type="types.email"
        :message="messages.email"
      >
        <b-input placeholder="Usuário ou Email" v-model="form.email"></b-input>
      </b-field>

      <b-field
        label="Senha"
        :type="types.password"
        :message="messages.password"
      >
        <b-input
          placeholder="Senha"
          type="password"
          v-model="form.password"
          password-reveal
        ></b-input>
      </b-field>
      <b-field>
        <a @click="$router.push('/signup')"
          ><small>Não possui conta? Cadastre-se</small></a
        >
      </b-field>

      <b-button @click="handleLogin" type="is-primary" outlined
        >Entrar</b-button
      >
    </div>
  </section>
</template>

<script>
import { api } from '@/services/api'
import { mapActions } from 'vuex'
// import jwt_decode from 'jwt-decode'
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
      form: {
        email: '',
        username: '',
        password: ''
      }
    }
  },
  methods: {
    ...mapActions('auth', ['ActionDoLogin']),
    async handleLog() {
      try {
        const response = await api.post('token/', {
          email: this.email,
          password: this.password
        })
        localStorage.setItem('token', `Bearer ${response.data.access}`)
      } catch (e) {
        this.messages.password = 'Email ou Senha incorretos'
        this.types.email = 'is-danger'
        this.types.password = 'is-danger'
      }
    },
    async handleLogin() {
      try {
        await this.ActionDoLogin(this.form)
        this.$router.push({ path: '/' })
      } catch (err) {
        alert(err ? err.message : 'oi')
      }
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
