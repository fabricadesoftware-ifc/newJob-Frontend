<script setup>
import { reactive, defineEmits } from 'vue'
import { useJobStore } from '@/stores/jobs'
import { Close } from '../icons'

const emit = defineEmits(['close'])

const jobStore = useJobStore()

const jobData = reactive({
  title: '',
  description: '',
  deadline: '',
  isPcd: false,
  isTravel: false,
  wage: 0,
  benefits: '',
  educationLevel: '',
  maxCandidates: 1,
  category: '',
  ImageJob: ''
})

const createJob = async () => {
  await jobStore.createJob(jobData)
  emit('close')
}
</script>
<template>
  <div class="blur">
    <div class="modal">
      <Close @click="$emit('close')" class="bt-close" size="35" />
      <h2>Criar Vaga</h2>
      <form class="form" @submit.prevent="createJob">
        <div class="row-form">
          <label for="title">Cargo</label>
          <input type="text" id="title" v-model="jobData.title" placeholder="Nome do cargo" />
        </div>
        <div class="row-form">
          <label for="benefits">Benefícios</label>
          <input
            type="text"
            id="benefits"
            v-model="jobData.benefits"
            placeholder="Escolha o benefício"
          />
        </div>
        <div class="row-form">
          <label for="wage">Salário</label>
          <input type="text" id="wage" v-model="jobData.wage" placeholder="Valor do salário" />
        </div>
        <div class="row-form">
          <label for="educationLevel">Nível educação</label>
          <select name="select" id="educationLevel" v-model="jobData.educationLevel">
            <option value="" disabled>Selecione o nível de educação</option>
            <option value="valor2">Valor 2</option>
            <option value="valor3">Valor 3</option>
          </select>
        </div>
        <div class="toggle-container">
          <label>Vaga para pessoas com deficiência</label>
          <div class="toggle">
            <input type="checkbox" id="a" />
            <label for="a"></label>
          </div>
        </div>
        <div class="toggle-container">
          <label>Disponibilidade para viajar</label>
          <div class="toggle">
            <input type="checkbox" id="b" />
            <label for="b"></label>
          </div>
        </div>
        <button class="bt-send" type="submit">Próximo</button>
      </form>
    </div>
  </div>
</template>
<style scoped>
.blur {
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(2px);
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  z-index: 4;
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal {
  background-color: #1d4734;
  position: relative;
  width: 30vw;
  height: 82vh;
  border-radius: 30px;
  padding: 1.5vw;
}

h2 {
  display: flex;
  justify-self: center;
  font-weight: 300;
}

.bt-close {
  color: white;
}

label {
  color: white;
  font-size: 1.3em;
  font-weight: 300;
}

.row-form {
  display: flex;
  flex-direction: column;
  gap: 0.4vh;
  margin: 1vh 0;

  & input,
  select {
    padding: 2vh 0.9vw;
    font-size: 1.1em;
    background-color: transparent;
    color: #a0a0a0;
    border: solid 1px #a0a0a0;
    border-radius: 10px;
  }

  & input:focus-within,
  select:focus-within {
    border: 1px solid #e09b6b;
    transition: all 0.2s ease-in-out;
    outline: none;
  }

  & ::-webkit-input-placeholder {
    color: #a0a0a0;
  }

  & :-moz-placeholder {
    color: #a0a0a0;
  }

  & ::-moz-placeholder {
    color: #a0a0a0;
  }

  & :-ms-input-placeholder {
    color: #a0a0a0;
  }
}

.toggle-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 1.4vw 0;
}

.toggle > input {
  display: none;
}

.toggle > label {
  position: relative;
  display: block;
  height: 37px;
  width: 65px;
  background: #898989;
  border-radius: 100px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.toggle > label:after {
  position: absolute;
  left: 3px;
  top: 3px;
  display: block;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: #fff;
  box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.05);
  content: '';
  transition: all 0.3s ease;
}

.toggle > label:active:after {
  transform: scale(1, 0.85);
}
.toggle > input:checked ~ label {
  background: #e09b6b;
}
.toggle > input:checked ~ label:after {
  left: 31px;
  background: #ffffff;
}
.toggle > input:disabled ~ label {
  background: #d5d5d5;
  pointer-events: none;
}
.toggle > input:disabled ~ label:after {
  background: #bcbdbc;
}

.bt-send {
  display: flex;
  justify-self: end;
  background-color: #e09b6b;
  border: none;
  padding: 1.9vh 1.5vw;
  border-radius: 10px;
  font-size: 1.3em;
}
</style>
