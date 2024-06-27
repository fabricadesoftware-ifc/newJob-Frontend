import api from '@/plugins/axios';
class CompanyService {
    async getAllCompanies() {
        const response = await api.get('companies/')
        return response.data
    }
    async deleteCompany(id) {
        const response = await api.delete(`companies/${id}`)
        return response.data
    }

}

export default new CompanyService()