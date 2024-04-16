import { defineStore } from "pinia/dist/pinia";
import { computed, reactive } from "vue";
import CompanyService from '@/services/companies'

export const useCompaniesStore = defineStore('company', () => {
    const state = reactive({
        companies: []
    })

    const companies = computed(() => state.companies)

    const getAllCompanies = async () => {
        const data = CompanyService.getAllCompanies()
        state.companies = data
    }

    return {companies, getAllCompanies}
})