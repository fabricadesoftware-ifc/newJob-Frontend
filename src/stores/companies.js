import { defineStore } from 'pinia'
import { computed, reactive } from 'vue'
import CompanyService from '@/services/companies'
import { useLoadingStore } from './loading' 

export const useCompaniesStore = defineStore('company', () => {
  const state = reactive({
    companies: []
  })
  const loadingStore = useLoadingStore() 

  const companies = computed(() => state.companies)

  const getAllCompanies = async () => {
    loadingStore.startLoading() 
    try {
      const data = await CompanyService.getAllCompanies()
      state.companies = data
    } finally {
      loadingStore.stopLoading() 
    }
  }

  const createCompany = async (companyData) => {
    loadingStore.startLoading() 
    try {
      const data = await CompanyService.createCompany(companyData)
      state.companies.push(data)
    } finally {
      loadingStore.stopLoading() 
    }
  }

  const deleteCompany = async (id) => {
    loadingStore.startLoading() 
    try {
      await CompanyService.deleteCompany(id)
      state.companies = state.companies.filter((company) => company.id !== id)
    } finally {
      loadingStore.stopLoading() 
    }
  }

  const updateCompany = async (id, companyData) => {
    loadingStore.startLoading() 
    try {
      const updatedCompany = await CompanyService.updateCompany(id, companyData)
      const index = state.companies.findIndex((company) => company.id === id)
      if (index !== -1) {
        state.companies[index] = updatedCompany
      }
    } finally {
      loadingStore.stopLoading() 
    }
  }

  return { companies, getAllCompanies, createCompany, deleteCompany, updateCompany }
})
