import { defineStore } from 'pinia';
import { computed } from 'vue';
import { useStorage } from "@vueuse/core";
import CompanyService from '@/services/companies';

export const useCompaniesStore = defineStore('company', () => {
  const state = useStorage("companies", {
    companies: [],
    currentCompany: []
  })
  const companies = computed(() => state.value.companies)
  const currentCompany = computed(() => state.value.currentCompany)

  const getAllCompanies = async () => {
    const data = await CompanyService.getAllCompanies()
    state.value.companies = data
  }

  const getCompany = async (id) => {
    const data = await CompanyService.getCompany(id)
    state.value.currentCompany = data
  }

  const createCompany = async (companyData) => {
    const data = await CompanyService.createCompany(companyData)
    state.value.companies.push(data)
  }

  const deleteCompany = async (id) => {
    await CompanyService.deleteCompany(id)
    state.value.companies = state.companies.filter((company) => company.id !== id)
  }

  const updateCompany = async (id, companyData) => {
    const updatedCompany = await CompanyService.updateCompany(id, companyData)
    const index = state.companies.findIndex((company) => company.id === id)
    if (index !== -1) {
      state.companies[index] = updatedCompany
    }
  }
  return { companies, currentCompany, getAllCompanies,getCompany, createCompany, deleteCompany, updateCompany }
})
