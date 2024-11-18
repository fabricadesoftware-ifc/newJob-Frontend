import axios from "axios";
class StateService{
    async getAllStates(){
        const response = await axios.get('state')
        return response.data
    }
    async deleteState(id){
        const response = await axios.delete(`state/${id}`)
        return response.data
    }
    async createState(stateData){
        const response = await axios.post(`state`, stateData)
        return response.data
    }
    async updateState(id, stateData){
        const response = await axios.put(`state/${id}`, stateData)
        return response.data
    }
}

export default new StateService()