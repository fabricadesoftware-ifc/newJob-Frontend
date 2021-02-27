<template>
  <section class="login-form mt-3">
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

      <b-button @click="handleLog" type="is-primary" outlined>Entrar</b-button>
    </div>
  </section>
</template>

<script>
import api from '@/services/api'
import { mapActions } from 'vuex'
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
    ...mapActions('auth', ['ActionSetUser']),
    async handleLogIn() {
      try {
        const response = await api.post('token/', {
          email: this.email,
          password: this.password
        })
        console.log(response.data.access)
        localStorage.setItem('token', `Bearer ${response.data.access}`)

        const profile = await api.get('v1/accounts/profile/', {
          headers: {
            Authorization: `${localStorage.getItem('token')}`
          }
        })
        console.log(profile)
      } catch (e) {
        this.messages.password = 'Email ou Senha incorretos'
        this.types.email = 'is-danger'
        this.types.password = 'is-danger'
      }
    },
    async handleLog() {
      this.ActionSetUser({
        username: this.username,
        email: this.email,
        password: this.password
      }).then(res => console.log(res))
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
