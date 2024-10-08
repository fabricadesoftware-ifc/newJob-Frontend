import { defineStore } from "pinia";
import { computed } from "vue";
import { useStorage } from "@vueuse/core"
import JobService from "@/services/jobs";

export const useJobStore = defineStore('job', () => {
    const state = useStorage("jobs", {
        jobs: [],
        currentJob: []
    })
    const jobs = computed(() => state.value.jobs)
    const currentJob = computed(() => state.value.currentJob)

    const getAllJobs = async (page) => {
        const data = await JobService.getAllJobs(page)
        state.value.jobs = data
    }

    const getJob = async (id) => {
        const data = await JobService.getJob(id)
        state.value.currentJob = data
    }

    const createJob = async (jobData) => {
        const newJob = await JobService.createJob(jobData)
        state.value.jobs.push(newJob);
    }

    const deleteJob = async (id) => {
        await JobService.deleteJob(id);
        state.value.jobs = state.value.jobs.filter(job => job.id !== id);
    };

    const updateJob = async (id, jobData) => {

        const updatedJob = await JobService.updateJob(id, jobData);
        const index = state.value.jobs.findIndex(job => job.id === id);
        if (index !== -1) {
            state.value.jobs[index] = updatedJob;
        }
    };

    return { jobs, currentJob, getAllJobs, getJob, createJob, deleteJob, updateJob }
})      