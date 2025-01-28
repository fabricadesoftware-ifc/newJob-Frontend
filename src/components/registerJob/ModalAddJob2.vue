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
          <label for="maxCandidates">Quantidade máxima</label>
          <input
            type="number"
            id="maxCandidates"
            v-model="jobData.maxCandidates"
            placeholder="Quantidade máxima de candidatos para a vaga"
          />
        </div>
        <div class="row-form">
          <label for="deadline">Data limite</label>
          <input type="date" id="deadline" v-model="jobData.deadline" />
        </div>
        <div class="row-form">
          <label for="category">Ramo</label>
          <select name="category" id="category" v-model="jobData.category">
            <option value="" disabled>Selecione o ramo da vaga</option>
            <option value="valor2">Valor 2</option>
            <option value="valor3">Valor 3</option>
          </select>
        </div>
        <div class="row-form">
          <label for="description">Descrição</label>
          <textarea
            name="description"
            id="description"
            cols="30"
            rows="10"
            placeholder="Descreva sobre a vaga"
          ></textarea>
        </div>
        <div class="buttons">
          <button class="bt-back" type="submit">Voltar</button>
          <button class="bt-send" type="submit">Publicar</button>
        </div>
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
  height: 80vh;
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

  & textarea {
    width: 93.5%;
    height: 15vh;
    resize: none;
  }

  & input,
  select,
  textarea {
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

.buttons {
  display: flex;
  justify-content: space-between;
}

.bt-send {
  background-color: #e09b6b;
  border: none;
  padding: 1.9vh 1.5vw;
  border-radius: 10px;
  font-size: 1.3em;
  margin-top: 3.5vh;
}

.bt-back {
  background-color: transparent;
  border: solid 1px #e09b6b;
  color: #e09b6b;
  padding: 1.9vh 2vw;
  border-radius: 10px;
  font-size: 1.3em;
  margin-top: 3.5vh;
}
</style>
