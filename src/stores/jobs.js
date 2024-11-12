import { defineStore } from "pinia";
import { computed, reactive } from "vue";
import JobService from "@/services/jobs";
import { useLoadingStore } from "./loading";

export const useJobStore = defineStore('job', () => {
    const state = reactive({
        jobs: []
    })

    const loadingStore = useLoadingStore();
    const jobs = computed(() => state.jobs);

    const getAllJobs = async () => {
        loadingStore.startLoading(); 
        try {
            const data = await JobService.getAllJobs();
            state.jobs = data;
        } finally {
            loadingStore.stopLoading(); 
        }
    }

    const createJob = async (jobData) => {
        loadingStore.startLoading(); 
        try {
            const newJob = await JobService.createJob(jobData);
            state.jobs.push(newJob);
        } finally {
            loadingStore.stopLoading(); 
        }
    }

    const deleteJob = async (id) => {
        loadingStore.startLoading(); 
        try {
            await JobService.deleteJob(id);
            state.jobs = state.jobs.filter(job => job.id !== id);
        } finally {
            loadingStore.stopLoading(); 
        }
    };

    const updateJob = async (id, jobData) => {
        loadingStore.startLoading(); 
        try {
            const updatedJob = await JobService.updateJob(id, jobData);
            const index = state.jobs.findIndex(job => job.id === id);
            if (index !== -1) {
                state.jobs[index] = updatedJob;
            }
        } finally {
            loadingStore.stopLoading(); 
        }
    };

    return { jobs, getAllJobs, createJob, deleteJob, updateJob };
});
