<template>
  <section class="job-form mt-3">
    <div class="form container">
      <b-field label="Nome da Empresa" :label-position="labelPosition">
        <b-input v-model="form.company"></b-input>
      </b-field>

      <b-field class="mb-0" label="CNPJ" :label-position="labelPosition">
        <b-input v-model="form.job" maxlength="30"></b-input>
      </b-field>

      <b-field class="mb-0" label="E-mail" :label-position="labelPosition">
        <b-input type="email" v-model="form.job" maxlength="30"></b-input>
      </b-field>

      <b-field label="Descrição" :label-position="labelPosition">
        <b-input
          v-model="form.description"
          maxlength="200"
          type="textarea"
        ></b-input>
      </b-field>

      <b-field label="Localidade" :label-position="labelPosition">
        <b-autocomplete
          v-model="form.local"
          rounded
          :data="['Araquari - SC', 'Joinville - SC', 'Campinas - RS']"
          placeholder="Escolha o local"
          icon="magnify"
          clearable
          @select="option => (selected = option)"
        >
          <template #empty>No results found</template>
        </b-autocomplete>
      </b-field>

      <b-button @click="handleSubmitForm" type="is-primary" outlined
        >Entrar</b-button
      >
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      labelPosition: 'on-border',
      form: {
        company: '',
        job: '',
        contractType: '',
        description: '',
        local: '',
        deadline: []
      }
    }
  },
  methods: {
    handleSubmitForm() {
      console.log('oi')
      console.log(this.form.company)
      console.log(this.form.job)
      console.log(this.form.contractType)
      console.log(this.form.description)
      console.log(this.form.local)
      console.log(this.form.deadline)
    }
  }
}
</script>
