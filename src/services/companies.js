import axios from "axios";
class CompanyService {
    async getAllCompanies() {
        const response = await axios.get('companies')
        return response.data
    }
    async deleteCompany(id) {
        const response = await axios.delete(`companies/${id}`)
        return response.data
    }
    async createCompany(companyData){
        const response = await axios.post('companies', companyData);
        return response.data
    }
    async updateCompany(id, companyData) {
            const response = await axios.put(`companies/${id}`, companyData);
            return response.data;
    }

}

export default new CompanyService()