import { defineStore } from "pinia";
import { computed, reactive } from "vue";
import CompanyService from '@/services/companies'

export const useCompaniesStore = defineStore('company', () => {
    const state = reactive({
        companies: []
    })

    const companies = computed(() => state.companies)



    const getAllCompanies = async () => {
        const data = await CompanyService.getAllCompanies()
        state.companies = data
    }

    const createCompany = async (companyData) => {
        const data = await CompanyService.createCompany(companyData)
        state.companies.push(data)
    }
    
    const deleteCompany = async (id) => {
        const data = await CompanyService.deleteCompany(id)
        state.companies = state.companies.filter(company => company.id !== id);

    }
    

    return {companies, getAllCompanies, createCompany, deleteCompany}
})