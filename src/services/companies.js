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
    async createCompany(companyData){
        const response = await api.post('companies/', companyData);
        return response.data
    }
    async updateCompany(id, companyData) {
            const response = await api.put(`companies/${id}`, companyData);
            return response.data;
    }

}

export default new CompanyService()