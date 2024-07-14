<script setup>
import { ref, onMounted } from 'vue';
import { useJobStore, useCompaniesStore, useLocalStore } from '@/stores/index';

const jobStore = useJobStore();
const companiesStore = useCompaniesStore();
const localStore = useLocalStore();

const jobData = ref({
  title: '',
  description: '',
  local: null,
  company: null,
  deadline: ''
});

const editingJobId = ref(null); // Id do job que está sendo editado

const fetchJobs = async () => {
  await jobStore.getAllJobs();
};

const fetchLocal = async () => {
  await localStore.getAllLocations();
};

const fetchCompanies = async () => {
  await companiesStore.getAllCompanies();
};

const removeJob = async (id) => {
  await jobStore.deleteJob(id);
};

const addOrUpdateJob = async () => {
  try {
    if (editingJobId.value) {
      await jobStore.updateJob(editingJobId.value, jobData.value);
    } else {
      await jobStore.createJob(jobData.value);
    }
    resetForm();
  } catch (error) {
    console.error("Failed to update or add job:", error);
  }
};

const editJob = (job) => {
  editingJobId.value = job.id;
  jobData.value = { ...job };
};

const resetForm = () => {
  editingJobId.value = null;
  jobData.value = {
    title: '',
    description: '',
    local: null,
    company: null,
    deadline: ''
  };
};

onMounted(async () => {
  await fetchJobs();
  await fetchCompanies();
  await fetchLocal();
});
</script>

<template>
  <div class="job-container">
    <button @click="fetchJobs" class="load-jobs-button">Load Jobs</button>
    <ul class="job-list">
      <li v-for="job in jobStore.jobs" :key="job.id" class="job-item">
        {{ job.title }}
        <button @click="editJob(job)" class="edit-button">Edit</button>
        <button @click="removeJob(job.id)" class="delete-button">Delete</button>
      </li>
    </ul>

    <form @submit.prevent="addOrUpdateJob" class="job-form">
      <div class="form-group">
        <label for="title">Title</label>
        <input v-model="jobData.title" id="title" type="text" required class="form-control" />
      </div>
      <div class="form-group">
        <label for="description">Description</label>
        <textarea v-model="jobData.description" id="description" required class="form-control"></textarea>
      </div>
      <div class="form-group">
        <label for="local">Local</label>
        <select v-model="jobData.local" id="local" required class="form-control">
          <option v-for="local in localStore.locations" :key="local.id" :value="local.id">
            {{ local.city }}
          </option>
        </select>
      </div>
      <div class="form-group">
        <label for="company">Company</label>
        <select v-model="jobData.company" id="company" required class="form-control">
          <option v-for="company in companiesStore.companies" :key="company.id" :value="company.id">
            {{ company.name }}
          </option>
        </select>
      </div>
      <div class="form-group">
        <label for="deadline">Deadline</label>
        <input v-model="jobData.deadline" id="deadline" type="date" required class="form-control" />
      </div>
      <button type="submit" class="submit-button">
        {{ editingJobId ? 'Update Job' : 'Add Job' }}
      </button>
    </form>
  </div>
</template>

<style scoped>
.job-container {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  border-radius: 8px;
}

.load-jobs-button,
.submit-button {
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px 20px;
  margin: 10px 0;
  border-radius: 5px;
  cursor: pointer;
}

.load-jobs-button:hover,
.submit-button:hover {
  background-color: #0056b3;
}

.job-list {
  list-style-type: none;
  padding: 0;
}

.job-item {
  display: flex;
  justify-content: space-between;
  padding: 10px;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 5px;
  margin-bottom: 10px;
}

.delete-button,
.edit-button {
  background-color: #dc3545;
  color: white;
  border: none;
  padding: 5px 10px;
  border-radius: 5px;
  cursor: pointer;
  margin-left: 10px;
}

.edit-button {
  background-color: #28a745;
}

.delete-button:hover {
  background-color: #c82333;
}

.edit-button:hover {
  background-color: #218838;
}

.job-form {
  display: flex;
  flex-direction: column;
}

.form-group {
  margin-bottom: 15px;
}

.form-group label {
  margin-bottom: 5px;
  font-weight: bold;
}

.form-control {
  width: 100%;
  padding: 8px;
  box-sizing: border-box;
  border: 1px solid #ddd;
  border-radius: 5px;
}

textarea.form-control {
  resize: vertical;
}
</style>
