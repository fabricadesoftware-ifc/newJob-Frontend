import { defineStore } from "pinia/dist/pinia";
import { computed, reactive } from "vue";
import JobService from "@/services/jobs";


export const useJobStore = defineStore('job', () => {
    const state = reactive({
        jobs: []
    })
    const jobs = computed(()=> state.jobs)

    const getAllJobs = async () => {
        const data = await JobService.getAllJobs()
        state.jobs = data
    }

    return {jobs, getAllJobs}
})