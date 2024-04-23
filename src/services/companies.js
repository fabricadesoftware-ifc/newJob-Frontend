import { api } from '@/plugins/axios';

class CompanyService {
    async getAllCompanies() {
        const response = await api.get('companies/')
        return response.data
    }
}

export default new CompanyService()