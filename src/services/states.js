import { api } from '@/plugins/axios';
class StateService{
    async getAllStates(){
        const response = await api.get('state/')
        return response.data
    }
    async deleteState(id){
        const response = await api.delete(`state/${id}`)
        return response.data
    }
    async createState(stateData){
        const response = await api.post(`state/`, stateData)
        return response.data
    }
    async updateState(id, stateData){
        const response = await api.put(`state/${id}/`, stateData)
        return response.data
    }
}

export default new StateService()