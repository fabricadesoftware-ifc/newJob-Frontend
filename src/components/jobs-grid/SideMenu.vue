<template>
  <aside class="menu">
    <p class="menu-label">
      Filtro
    </p>
    <ul class="menu-list">
      <p class="menu-label mb-2">
        Tipo de Contrato
      </p>
      <li class="columns is-gapless" @click="showCheck">
        <b-checkbox-button
          class="column"
          v-model="checkboxGroup"
          native-value="CLT"
          :disabled="choiceCLT"
        >
          CLT
        </b-checkbox-button>
        <b-checkbox-button
          class="column"
          v-model="checkboxGroup"
          native-value="PJ"
          :disabled="choicePJ"
        >
          <span>PJ</span>
        </b-checkbox-button>

        <b-checkbox-button
          class="column"
          v-model="checkboxGroup"
          native-value="Estagio"
          :disabled="choiceEs"
        >
          Estágio
        </b-checkbox-button>
      </li>
    </ul>
    <p class="menu-label">
      Cidade
    </p>
    <ul class="menu-list">
      <li>
        <b-select placeholder="Select a subject">
          <option value="1">Joinville</option>
          <option value="2">Araquari</option>
        </b-select>
      </li>
    </ul>
    <ul class="menu-list">
      <p
        class="menu-label mb-2 mt-3
    "
      >
        Nível de experiência
      </p>
      <li class="columns is-gapless" @click="showCheck">
        <b-checkbox-button
          class="column"
          v-model="checkboxGroup"
          native-value="Junior"
          :disabled="choiceCLT"
        >
          Junior
        </b-checkbox-button>
        <b-checkbox-button
          class="column"
          v-model="checkboxGroup"
          native-value="Pleno"
          :disabled="choicePJ"
        >
          <span>Pleno</span>
        </b-checkbox-button>

        <b-checkbox-button
          class="column"
          v-model="checkboxGroup"
          native-value="Senior"
          :disabled="choiceEs"
        >
          Senior
        </b-checkbox-button>
      </li>
    </ul>
  </aside>
</template>

<script>
export default {
  data() {
    return {
      checkboxGroup: []
    }
  },
  computed: {
    choiceCLT() {
      if (this.checkboxGroup.length >= 1 && this.checkboxGroup[0] != 'CLT') {
        return true
      }
      return false
    },
    choiceEs() {
      if (
        this.checkboxGroup.length >= 1 &&
        this.checkboxGroup[0] != 'Estagio'
      ) {
        return true
      }
      return false
    },
    choicePJ() {
      if (this.checkboxGroup.length >= 1 && this.checkboxGroup[0] != 'PJ') {
        return true
      }
      return false
    }
  },
  methods: {
    showCheck() {
      console.log(this.checkboxGroup)
    }
  }
}
</script>

<style></style>
