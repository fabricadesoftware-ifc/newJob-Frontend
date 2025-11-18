<script setup>
import { FormInputComponent } from '@/components'

defineProps({
  verifica: Boolean
})
</script>
<template>
  <FormInputComponent texto="Nome" placeholder="Digite seu nome" />
  <FormInputComponent texto="Nome fantasia" placeholder="Digite o nome fantasia da empresa" />
  <FormInputComponent texto="CNPJ" type="text" placeholder="Digite o CNPJ" />
  <FormInputComponent
    texto="Senha"
    :checkInputPassword="true"
    placeholder="Digite sua senha"
    :model="password"
  />
</template>
