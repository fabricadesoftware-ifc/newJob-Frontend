import { defineStore } from "pinia";
import { computed, reactive } from "vue";
import CompanyService from '@/services/companies'

export const useCompaniesStore = defineStore('company', () => {
    const state = reactive({
        companies: []
    })

    const companies = computed(() => state.companies)

    // const jobs = computed(()=> state.jobs)

    const getAllCompanies = async () => {
        const data = await CompanyService.getAllCompanies()
        state.companies = data
    }

    return {companies, getAllCompanies}
})