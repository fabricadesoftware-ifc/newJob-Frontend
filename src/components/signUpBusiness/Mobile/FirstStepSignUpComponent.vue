<script setup>
import { FormInputComponent } from '@/components'

defineProps ({
    verifica: Boolean
})
</script>
<template>
  <FormInputComponent texto="Nome" placeholder="Digite seu nome" />
  <FormInputComponent texto="Nome fantasia" placeholder="Digite o nome fantasia da empresa" />
  <FormInputComponent texto="CNPJ" type="text" placeholder="Digite o CNPJ" />
  <FormInputComponent
    texto="Senha"
    :type="showPassword ? 'text' : 'password'"
    placeholder="Digite sua senha"
  >
    <i
      class="mdi mdi-eye-off-outline"
      @click="showPassword = !showPassword"
      v-if="showPassword"
    ></i>
    <i class="mdi mdi-eye-outline" @click="showPassword = !showPassword" v-if="!verifica"></i>
  </FormInputComponent>
</template>
