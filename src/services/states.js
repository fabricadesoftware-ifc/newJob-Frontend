import { api } from '@/plugins/axios';
class StateService{
    async getAllServices(){
        const response = await api.get('state/')
        return response.data
    }
    async deleteService(id){
        const response = await api.delete(`state/${id}`)
        return response.data
    }
    async createService(serviceData){
        const response = await api.post(`state/`, serviceData)
        return response.data
    }
    async updateService(id, serviceData){
        const response = await api.put(`state/${id}`, serviceData)
        return response.data
    }
}

export default new StateService()