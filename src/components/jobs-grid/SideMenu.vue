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
          v-model="checkboxContract"
          native-value="CLT"
          :disabled="choiceCLT"
        >
          CLT
        </b-checkbox-button>
        <b-checkbox-button
          class="column"
          v-model="checkboxContract"
          native-value="PJ"
          :disabled="choicePJ"
        >
          <span>PJ</span>
        </b-checkbox-button>

        <b-checkbox-button
          class="column"
          v-model="checkboxContract"
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
          v-model="checkboxExperience"
          native-value="Junior"
          :disabled="choiceJunior"
        >
          Junior
        </b-checkbox-button>
        <b-checkbox-button
          class="column"
          v-model="checkboxExperience"
          native-value="Pleno"
          :disabled="choicePleno"
        >
          <span>Pleno</span>
        </b-checkbox-button>

        <b-checkbox-button
          class="column"
          v-model="checkboxExperience"
          native-value="Senior"
          :disabled="choiceSenior"
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
      checkboxExperience: [],
      checkboxContract: []
    }
  },
  computed: {
    choiceCLT() {
      if (
        this.checkboxContract.length >= 1 &&
        this.checkboxContract[0] != 'CLT'
      ) {
        return true
      }
      return false
    },
    choiceEs() {
      if (
        this.checkboxContract.length >= 1 &&
        this.checkboxContract[0] != 'Estagio'
      ) {
        return true
      }
      return false
    },
    choicePJ() {
      if (
        this.checkboxContract.length >= 1 &&
        this.checkboxContract[0] != 'PJ'
      ) {
        return true
      }
      return false
    },
    choiceJunior() {
      if (
        this.checkboxExperience.length >= 1 &&
        this.checkboxExperience[0] != 'Junior'
      ) {
        return true
      }
      return false
    },
    choicePleno() {
      if (
        this.checkboxExperience.length >= 1 &&
        this.checkboxExperience[0] != 'Pleno'
      ) {
        return true
      }
      return false
    },
    choiceSenior() {
      if (
        this.checkboxExperience.length >= 1 &&
        this.checkboxExperience[0] != 'Senior'
      ) {
        return true
      }
      return false
    }
  },
  methods: {
    showCheck() {
      console.log(this.checkboxExperience[0])
      console.log(this.checkboxContract[0])

      setTimeout(() => {
        console.log(this.checkboxContract[0])
      }, 2)
    }
  }
}
</script>

<style></style>
