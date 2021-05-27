<template>
  <section class="job-form mt-3">
    <p>
      form: { company: '', job: '', contractType: '', jogDescription: '', local:
      '', deadline: '' }
    </p>
    <div class="form container">
      <b-field label="Empresa" :label-position="labelPosition">
        <b-input v-model="form.company"></b-input>
      </b-field>

      <b-field class="mb-0" label="Cargo" :label-position="labelPosition">
        <b-input v-model="form.job" maxlength="30"></b-input>
      </b-field>

      <b-field :label-position="labelPosition">
        <b-select v-model="form.contractType" placeholder="Tipo de contrato">
          <option value="1">CLT</option>
          <option value="2">PJ</option>
          <option value="3">Estágio</option>
        </b-select>
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

      <b-field
        label="Até quando a vagas estara disponivel para candidatura?"
        :label-position="labelPosition"
      >
        <b-datepicker
          v-model="form.deadline"
          placeholder="Click to select..."
          icon="calendar-today"
          trap-focus
        >
        </b-datepicker>
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
