<template>
  <aside class="menu">
    <p class="menu-label">
      Filtro
    </p>
    <ul class="menu-list">
      <li>
        Tipo de Contrato
      </li>
      <li>
        <b-field class="center">
          <b-checkbox-button
            type="is-white"
            v-model="checkboxGroup"
            native-value="PJ"
          >
            <span>PJ</span>
          </b-checkbox-button>
          <b-checkbox-button v-model="checkboxGroup" native-value="CLT">
            CLT
          </b-checkbox-button>
          <b-checkbox-button v-model="checkboxGroup" native-value="Estagio">
            Estágio
          </b-checkbox-button>
        </b-field>
      </li>
    </ul>
    <p class="menu-label">
      Cidade
    </p>
    <ul class="menu-list">
      <li><a>Invitations</a></li>
      <li><a>Cloud Storage Environment Settings</a></li>
      <li><a>Authentication</a></li>
    </ul>
  </aside>
</template>

<script>
export default {
  data() {
    return {
      checkboxGroup: ''
    }
  }
}
</script>

<style></style>
