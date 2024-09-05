import { defineStore } from "pinia";
import { computed, reactive } from "vue";
import JobService from "@/services/jobs";

export const useJobStore = defineStore('job', () => {
    const state = reactive({
        jobs: [],
        currentJob: []
    })
    const jobs = computed(() => state.jobs)
    const currentJob = computed(() => state.currentJob)

    const getAllJobs = async () => {
        const data = await JobService.getAllJobs()
        state.jobs = data
    }

    const getJob = async (id) => {
        const data = await JobService.getJob(id)
        state.currentJob = data
    }

    const createJob = async (jobData) => {
        const newJob = await JobService.createJob(jobData)
        state.jobs.push(newJob);
    }

    const deleteJob = async (id) => {
        await JobService.deleteJob(id);
        state.jobs = state.jobs.filter(job => job.id !== id);
    };

    const updateJob = async (id, jobData) => {

        const updatedJob = await JobService.updateJob(id, jobData);
        const index = state.jobs.findIndex(job => job.id === id);
        if (index !== -1) {
            state.jobs[index] = updatedJob;
        }
    };

    return { jobs, currentJob, getAllJobs, getJob, createJob, deleteJob, updateJob }
})      