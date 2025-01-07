<script setup>
import { reactive, defineEmits } from 'vue';
import { useJobStore } from '@/stores/jobs';

const emit = defineEmits(['close']);

const jobStore = useJobStore();

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
  ImageJob: '',
});

const createJob = async () => {
  await jobStore.createJob(jobData);
  emit('close');
};

</script>
<template>
  <div class="blur">
    <div class="modal">
        <h2>Criar Vaga</h2>
        <button @click="$emit('close')" class="btn-close">
          <i class="mdi mdi-close" />
        </button>
      <form class="form" @submit.prevent="createJob">
        <div class="row-form">
          <label for="title">Nome</label>
          <input type="text" id="title" v-model="jobData.title" />
        </div>
        <div class="row-form">
          <label for="description">Descrição</label>
          <input type="text" id="description" v-model="jobData.icon" />
        </div>
        <button class="btn-send" type="submit">Publicar</button>
        <input type="date">
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
  background-color: #1D4734;
  position: relative;
  width: 50vw;

}
</style>