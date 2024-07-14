import { defineStore } from 'pinia'
import { computed, reactive } from 'vue'
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
    await CompanyService.deleteCompany(id)
    state.companies = state.companies.filter((company) => company.id !== id)
  }

  const updateCompany = async (id, companyData) => {
    const updatedCompany = await CompanyService.updateCompany(id, companyData)
    const index = state.companies.findIndex((company) => company.id === id)
    if (index !== -1) {
      state.companies[index] = updatedCompany
    }
  }
  return { companies, getAllCompanies, createCompany, deleteCompany, updateCompany }
})
