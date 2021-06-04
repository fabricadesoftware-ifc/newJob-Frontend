<template>
  <section class="login-form ">
    <h1 class="title"><strong>Seu Perfil</strong></h1>
    <div class="form container mt-2">
      <b-field
        label="Primeiro Nome"
        :type="types.first_name"
        :message="messages.first_name"
      >
        <b-input placeholder="Nome" v-model="form.first_name"></b-input>
      </b-field>

      <b-field
        label="Sobrenome"
        :type="types.last_name"
        :message="messages.last_name"
      >
        <b-input placeholder="Sobrenome" v-model="form.last_name"></b-input>
      </b-field>

      <b-field label="Telefone" :type="types.phone" :message="messages.phone">
        <b-input
          placeholder="phone"
          type="phone"
          v-model="form.phone"
        ></b-input>
      </b-field>

      <b-field
        label="Linkedin"
        :type="types.linkedin"
        :message="messages.linkedin"
      >
        <b-input placeholder="Url" v-model="form.linkedin"></b-input>
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
      <div class="file-button mb-4">
        <b-field class="file is-primary" :class="{ 'has-name': !!file }">
          <b-upload v-model="file" class="file-label">
            <span class="file-cta">
              <b-icon class="file-icon" icon="upload"></b-icon>
              <span class="file-label">Click to upload</span>
            </span>
            <span class="file-name" v-if="file">
              {{ file.name }}
            </span>
          </b-upload>
        </b-field>
      </div>
      <b-button @click="log" type="is-black" outlined>Salvar</b-button>
    </div>
  </section>
</template>

<script>
// eslint-disable-next-line no-unused-vars
import { fileApi } from '@/services'

export default {
  data() {
    return {
      file: null,
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
      form: {
        first_name: '',
        last_name: '',
        phone: '',
        linkedin: '',
        profile_title: '',
        profile_description: '',
        avatar_attachment_key: ''
      }
    }
  },
  methods: {
    async log() {
      let newForm = {}

      for (let field in this.form) {
        if (this.form[field].trim() !== '') {
          newForm[field] = this.form[field]
        }
      }
      console.log(this.file)

      if (this.file) {
        const response = await fileApi.postFile(this.file, {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        })
        console.log(response)
      }
      //   await APIProfilePut(newForm, {
      //     Authorization: `Bearer ${localStorage.getItem('token')}`
      //   })
    },
    mount() {}
  }
}
</script>

<style scoped>
/* .login-form { */
/* background-color: #e1e1e1; */
/* background-color: #000000; */
/* } */

/* .login-form .form {
  width: 55%;
  background-color: #aaaaaa;
}

@media screen and (max-width: 700px) {
  .form {
    width: 85%;
  }
} */
.file-button {
  display: flex;
  justify-content: center;
}
</style>
