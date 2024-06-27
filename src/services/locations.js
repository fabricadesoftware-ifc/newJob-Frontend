import { api } from '@/plugins/axios';
class LocalService{
    async getAllLocations(){
        const response = await api.get('local/')
        return response.data
    }
    async deleteLocation(id){
        const response = await api.delete(`local/${id}`)
        return response.data
    }
}

export default new LocalService()