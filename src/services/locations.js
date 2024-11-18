import axios from "axios";
class LocalService{
    async getAllLocations(){
        const response = await axios.get('local')
        return response.data
    }
    async deleteLocation(id){
        const response = await axios.delete(`local/${id}`)
        return response.data
    }
    async createLocation(locationData){
        const response = await axios.post(`local`, locationData)
        return response.data
    }
    async updateLocation(id, locationData){
        const response = await axios.post(`local/${id}`, locationData)
        return response.data
    }
}

export default new LocalService()