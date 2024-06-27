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
}

export default new StateService()